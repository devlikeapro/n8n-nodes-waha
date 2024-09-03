import { Parser } from './parser';

test('query param', () => {
	const paths = {
		'/api/entities': {
			get: {
				operationId: 'EntityController_list',
				summary: 'List all entities',
				parameters: [
					{
						name: 'all',
						required: false,
						in: 'query',
						example: false,
						description: 'Boolean flag description',
						schema: {
							type: 'boolean',
						},
					},
				],
				tags: ['🖥️ Tag'],
			},
		},
	};

	// @ts-ignore
	const parser = new Parser({ paths });
	const result = parser.parse('Entity',
		{
			uri: '/api/entities',
			method: 'get',
		}
	);
	expect(result).toEqual([
		{
			displayName: 'Operation',
			name: 'operation',
			type: 'options',
			noDataExpression: true,
			displayOptions: {
				show: {
					resource: ['Entity'],
				},
			},
			options: [
				{
					name: 'List',
					value: 'List',
					action: 'List all entities',
					description: 'List all entities',
					routing: {
						request: {
							method: 'GET',
							url: '=/api/entities',
						},
					},
				},
			],
			default: 'List',
		},
		{
			displayName: 'All',
			name: 'all',
			type: 'boolean',
			displayOptions: {
				show: {
					resource: ['Entity'],
					operation: ['List'],
				},
			},
			default: true,
			// eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
			description: 'Boolean flag description',
			routing: {
				request: {
					qs: {
						all: '={{ $value }}',
					},
				},
			},
		},
	]);
});

test('path param', () => {
	const paths = {
		'/api/entities/{entity}': {
			get: {
				operationId: 'EntityController_get',
				summary: 'Get entity',
				parameters: [
					{
						name: 'entity',
						required: true,
						in: 'path',
						schema: {
							default: 'default',
						},
						description: 'Entity <code>name</code>',
					},
				],
				tags: ['🖥️ Tag'],
			},
		},
	};

	// @ts-ignore
	const parser = new Parser({ paths });

	const result = parser.parse('Entity',
		{
			uri: '/api/entities/{entity}',
			method: 'get',
		}
	);
	expect(result).toEqual([
		{
			displayName: 'Operation',
			name: 'operation',
			type: 'options',
			noDataExpression: true,
			displayOptions: {
				show: {
					resource: ['Entity'],
				},
			},
			options: [
				{
					name: 'Get',
					value: 'Get',
					action: 'Get entity',
					description: 'Get entity',
					routing: {
						request: {
							method: 'GET',
							url: '=/api/entities/{{$parameter["entity"]}}',
						},
					},
				},
			],
			default: 'Get',
		},
		{
			displayName: 'Entity',
			name: 'entity',
			type: 'string',
			displayOptions: {
				show: {
					resource: ['Entity'],
					operation: ['Get'],
				},
			},
			default: 'default',
			required: true,
			description: 'Entity <code>name</code>',
		},
	]);
});

test('request body', () => {
	const paths = {
		'/api/entities': {
			post: {
				operationId: 'EntityController_create',
				summary: 'Create entity',
				requestBody: {
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/Entity',
							},
						},
					},
				},
				tags: ['🖥️ Tag'],
			},
		},
	};
	const components = {
		schemas: {
			Entity: {
				type: 'object',
				properties: {
					name: {
						type: 'string',
						maxLength: 54,
						example: 'default',
						description: 'Entity name',
					},
					start: {
						type: 'boolean',
						description: 'Boolean flag description',
						example: true,
						default: true,
					},
					config: {
						$ref: '#/components/schemas/EntityConfig',
					},
				},
				required: ['name'],
			},
		},
	};

	// @ts-ignore
	const parser = new Parser({ paths, components });

	const result = parser.parse('Entity',
		{
			uri: '/api/entities',
			method: 'post',
		},
	);
	expect(result).toEqual([
		{
			displayName: 'Operation',
			name: 'operation',
			type: 'options',
			noDataExpression: true,
			displayOptions: {
				show: {
					resource: ['Entity'],
				},
			},
			options: [
				{
					name: 'Create',
					value: 'Create',
					action: 'Create entity',
					description: 'Create entity',
					routing: {
						request: {
							method: 'POST',
							url: '=/api/entities',
						},
					},
				},
			],
			default: 'Create',
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: 'default',
			description: 'Entity name',
			required: true,
			displayOptions: {
				show: {
					resource: ['Entity'],
					operation: ['Create'],
				},
			},
			routing: {
				request: {
					body: {
						name: '={{ $value }}',
					},
				},
			},
		},
		{
			displayName: 'Start',
			name: 'start',
			type: 'boolean',
			default: true,
			required: undefined,
			// eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
			description: 'Boolean flag description',
			displayOptions: {
				show: {
					resource: ['Entity'],
					operation: ['Create'],
				},
			},
			routing: {
				request: {
					body: {
						start: '={{ $value }}',
					},
				},
			},
		},
		{
			displayName: 'Config',
			name: 'config',
			type: 'json',
			displayOptions: {
				show: {
					resource: ['Entity'],
					operation: ['Create'],
				},
			},
			default: '{}',
			required: undefined,
			routing: {
				request: {
					body: {
						config: '={{ JSON.parse($value) }}',
					},
				},
			},
		},
	]);
});
