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

	const parser = new Parser(paths);
	const result = parser.parse('Entity', [
		{
			uri: '/api/entities',
			method: 'get',
		},
	]);
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

	const parser = new Parser(paths);

	const result = parser.parse('Entity', [
		{
			uri: '/api/entities/{entity}',
			method: 'get',
		},
	]);
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
