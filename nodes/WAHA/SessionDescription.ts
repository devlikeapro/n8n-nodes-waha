import { INodeProperties } from 'n8n-workflow/dist/Interfaces';

export const SessionOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['session'],
			},
		},
		options: [
			{
				name: '📜 List',
				value: 'list',
				action: 'List sessions',
				description: 'List all sessions',
				routing: {
					request: {
						method: 'GET',
						url: '/api/sessions',
					},
				},
			},
			{
				name: '📖 Get',
				action: 'Get a session',
				value: 'get',
				description: 'Get a session by name',
				routing: {
					request: {
						method: 'GET',
					},
				},
			},
		],
		default: 'list',
	},
];

export const SessionFields: INodeProperties[] = [
	{
		displayName: 'All Sessions',
		name: 'all',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['session'],
				operation: ['list'],
			},
		},
		default: true,
		description: 'Whether to return all sessions (including STOPPED) or only the ones that are active',
		routing: {
			request: {
				qs: {
					all: '={{ $value }}',
				},
			},
		},
	},
	{
		displayName: 'Session Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['session'],
				operation: ['get'],
			},
		},
		default: "default",
		routing: {
			request: {
				url: '/api/sessions/{{ $value }}',
			},
		},
	},
];
