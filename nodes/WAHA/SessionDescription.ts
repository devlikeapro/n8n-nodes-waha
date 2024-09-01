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
				name: 'List',
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
		],
		default: 'list',
	},
];

export const SessionFields: INodeProperties[] = [
	{
		displayName: 'All Sessions',
		name: 'all',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['session'],
				operation: ['list'],
			},
		},
		default: 'true',
		routing: {
			request: {
				qs: {
					all: '={{ $value }}',
				},
			},
		},
		options: [
			{
				name: 'True',
				value: 'true',
				description: "Include STOPPED session"
			},
			{
				name: 'False',
				value: 'false',
				description: "Exclude STOPPED session"
			},
		],
	},
];
