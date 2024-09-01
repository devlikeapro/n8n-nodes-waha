import { INodeProperties, NodePropertyTypes } from 'n8n-workflow/dist/Interfaces';
import * as lodash from "lodash"

interface Action {
	uri: string;
	method: string;
}

/**
 * /api/entities/{entity} => /api/entities/{{$parameter["entity"]}}
 */
function replaceToParameter(uri: string): string{
	return uri.replace(/{([^}]*)}/g, '{{$parameter["$1"]}}');
}

export class Parser {
	constructor(private paths: any) {}

	parse(resource: string, actions: Action[]): INodeProperties[] {
		const fieldNodes: any[] = [];
		const options: any[] = [];
		for (const action of actions) {
			const operation = this.paths[action.uri][action.method];
			const { option, fields } = this.parseAction(resource, operation, action.uri, action.method);
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

	parseAction(resourceName: string, operation: any, uri: string, method: string) {
		const operationId = operation.operationId.split('_')[1];
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
		const fields = this.parseQueryFields(resourceName, name, operation);
		return {
			option: option,
			fields: fields,
		};
	}

	parseQueryFields(resourceName: string, operationName: string, operation: any) {
		const parameters: any[] = operation.parameters;
		if (!parameters) {
			return [];
		}
		const fields = [];
		for (const parameter of parameters) {
			const field = this.parseParam(parameter, resourceName, operationName);
			const isQuery = parameter.in === 'query';
			if (isQuery){
				field.routing = {
					request: {
						qs: {
							[parameter.name]: '={{ $value }}',
						},
					},
				}
			}
			fields.push(field);
		}
		return fields;
	}

	private parseParam(parameter: any, resourceName: string, operationName: string) {
		const name = parameter.name;
		const schemaType = parameter.schema.type;

		let type: NodePropertyTypes;
		switch (schemaType) {
			case 'boolean':
				type = 'boolean';
				break;
			case 'string':
			case undefined:
				type = 'string';
				break;
			default:
				throw new Error(`Type ${schemaType} not supported`);
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
			default: parameter.schema.default || true,
			// eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
			description: parameter.description,
		};
		return field;
	}
}
