import {INodeProperties, NodePropertyTypes} from 'n8n-workflow/dist/Interfaces';
import * as lodash from 'lodash';
import {OpenAPIV3} from 'openapi-types';

interface Action {
	uri: string;
	method: "get" | "post" | "put" | "delete" | "patch";
}

/**
 * /api/entities/{entity} => /api/entities/{{$parameter["entity"]}}
 */
function replaceToParameter(uri: string): string {
	return uri.replace(/{([^}]*)}/g, '{{$parameter["$1"]}}');
}
function singular(name: string){
	return name.replace(/s$/, '');
}

function sessionFirst(a: any, b: any) {
	if (a.name === 'session') {
		return -1;
	}
	if (b.name === 'session') {
		return 1;
	}
	return 0;
}

export class Parser {
	constructor(private doc: OpenAPIV3.Document) {
	}

	get paths(): OpenAPIV3.PathsObject {
		return this.doc.paths;
	}

	parse(resource: string, actions: Action[]): INodeProperties[] {
		const fieldNodes: any[] = [];
		const options: any[] = [];
		for (const action of actions) {
			const ops: OpenAPIV3.PathItemObject = this.paths[action.uri]!!
			const operation = ops[action.method as OpenAPIV3.HttpMethods]!!
			const {option, fields} = this.parseOperation(
				resource,
				operation,
				action.uri,
				action.method,
			);
			options.push(option);
			fieldNodes.push(...fields);
		}

		// eslint-disable-next-line
		const operations = {
			displayName: 'Operation',
			name: 'operation',
			type: 'options',
			noDataExpression: true,
			displayOptions: {
				show: {
					resource: [resource],
				},
			},
			options: options,
			default: options[0].value as string,
		};

		return [operations, ...fieldNodes] as INodeProperties[];
	}

	parseOperation(resourceName: string, operation: OpenAPIV3.OperationObject, uri: string, method: string) {
		const operationId = operation.operationId!!.split('_')[1];
		const name = lodash.startCase(operationId);
		const option = {
			name: name,
			value: name,
			action: operation.summary,
			description: operation.description || operation.summary,
			routing: {
				request: {
					method: method.toUpperCase(),
					url: `=${replaceToParameter(uri)}`,
				},
			},
		};
		const fields = this.parseFields(resourceName, name, operation);
		return {
			option: option,
			fields: fields,
		};
	}

	parseFields(resourceName: string, operationName: string, operation: any) {
		const fields = [];

		const parameterFields = this.parseParameterFields(
			operation.parameters,
			resourceName,
			operationName,
		);
		fields.push(...parameterFields);
		const bodyFields = this.parseRequestBody(operation.requestBody, resourceName, operationName);
		fields.push(...bodyFields);
		// sort fields, so "session" always top
		fields.sort(sessionFirst);
		return fields;
	}

	private parseParameterFields(parameters: any[], resourceName: string, operationName: string) {
		if (!parameters) {
			return [];
		}
		const fields = [];
		for (const parameter of parameters) {
			const field = this.parseParam(parameter, resourceName, operationName);
			const isQuery = parameter.in === 'query';
			if (isQuery) {
				field.routing = {
					request: {
						qs: {
							[parameter.name]: '={{ $value }}',
						},
					},
				};
			}
			fields.push(field);
		}
		return fields;
	}

	private parseParam(parameter: any, resourceName: string, operationName: string) {
		const name = parameter.name;
		let schemaType = parameter.schema.type;
		if (!schemaType) {
			if (parameter.schema['$ref'] || parameter.schema['oneOf'] || parameter.schema['allOf']) {
				schemaType = 'json';
			}
		}

		let type: NodePropertyTypes;
		let defaultValue = parameter.schema.default || parameter.schema.example;
		switch (schemaType) {
			case 'boolean':
				type = 'boolean';
				defaultValue = defaultValue !== undefined ? defaultValue : true;
				break;
			case 'string':
			case undefined:
				type = 'string';
				defaultValue = defaultValue !== undefined ? defaultValue : 'string';
				break;
			case 'object':
			case 'json':
				type = 'json';
				defaultValue = defaultValue !== undefined ? defaultValue : '{}';
				break;
			default:
				throw new Error(`Type '${schemaType}' not supported - '${name}'`);
		}

		const field: INodeProperties = {
			displayName: lodash.startCase(name),
			name: name,
			type: type,
			required: parameter.required || undefined,
			displayOptions: {
				show: {
					resource: [resourceName],
					operation: [operationName],
				},
			},
			default: defaultValue,
			// eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
			description: parameter.description || parameter.schema.description,
		};
		return field;
	}

	private parseRequestBody(
		requestBody: any,
		resourceName: string,
		operationName: string,
	): INodeProperties[] {
		if (!requestBody) {
			return [];
		}
		const requestBodyRef = requestBody.content['application/json'].schema['$ref'];
		const requestSchema = this.resolveRef(requestBodyRef);
		if (requestSchema.type != 'object') {
			throw new Error(`Type ${requestSchema.type} not supported`);
		}
		const properties = requestSchema.properties;
		const fields = [];
		for (const key in properties) {
			const property = properties[key];
			const field = this.parseParam(
				{
					name: key,
					schema: property,
					required: requestSchema.required && requestSchema.required?.includes(key),
					// @ts-ignore
					description: property.description,
				},
				resourceName,
				operationName,
			);
			if (field.type === 'json') {
				field.default = '{}';
				field.routing = {
					request: {
						body: {
							[key]: '={{ JSON.parse($value) }}',
						},
					},
				};
			} else {
				field.routing = {
					request: {
						body: {
							[key]: '={{ $value }}',
						},
					},
				};
			}
			fields.push(field);
		}
		return fields;
	}

	private resolveRef(ref: string): OpenAPIV3.SchemaObject {
		const refPath = ref.split('/').slice(1);
		let schema: any = this.doc;
		for (const path of refPath) {
			// @ts-ignore
			schema = schema[path];
		}
		if ("$ref" in schema) {
			return this.resolveRef(schema["$ref"]);
		}
		return schema;
	}

	getResources(): INodeProperties {
		const tags = this.doc.tags || []
		const options = tags.map((tag) => {
			const name = singular(tag.name)
			return {
				name: name,
				// keep only ascii, no emojis
				value: name.replace(/[^a-zA-Z0-9]/g, ''),
				description: tag.description
			};
		})
		return {
			displayName: 'Resource',
			name: 'resource',
			type: 'options',
			noDataExpression: true,
			options: options,
			default: 'Chatting',
		}
	}
}
