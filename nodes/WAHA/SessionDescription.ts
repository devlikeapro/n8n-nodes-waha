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
			{
				name: 'Get',
				action: 'Get a session',
				value: 'get',
				description: 'Get a session',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/sessions/{{$parameter["sessionName"]}}',
					},
				},
			},
			{
				name: 'Create',
				action: 'Create a session',
				value: 'create',
				description: 'Create a session',
				routing: {
					request: {
						method: 'POST',
						url: '/api/sessions',
						body: {
							name: '{{$parameter["sessionName"]}}',
							config: '{{$parameter["sessionConfig"]}}',
						},
					},
				},
			},
			{
				name: 'Delete',
				action: 'Delete a session',
				value: 'delete',
				description: 'Delete a session',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/sessions/{{$parameter["sessionName"]}}',
					},
				},
			},
			{
				name: 'Start',
				action: 'Start a session',
				value: 'start',
				description: 'Start a session',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/sessions/{{$parameter["sessionName"]}}/start',
					},
				},
			},
			{
				name: 'Stop',
				action: 'Stop a session',
				value: 'stop',
				description: 'Stop a session',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/sessions/{{$parameter["sessionName"]}}/stop',
					},
				},
			},
			{
				name: 'Logout',
				action: 'Logout a session',
				value: 'logout',
				description: 'Logout a session',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/sessions/{{$parameter["sessionName"]}}/logout',
					},
				},
			},
			{
				name: 'Restart',
				action: 'Restart a session',
				value: 'restart',
				description: 'Restart a session',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/sessions/{{$parameter["sessionName"]}}/restart',
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
		description:
			'Whether to return all sessions (including STOPPED) or only the ones that are active',
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
		name: 'sessionName',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['session'],
				operation: ['get'],
			},
		},
		default: 'default',
	},
];
