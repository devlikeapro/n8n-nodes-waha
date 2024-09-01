import { INodeProperties } from 'n8n-workflow/dist/Interfaces';

export const ChattingOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['chatting'],
			},
		},
		options: [
			{
				name: 'Send Text',
				value: '/api/sendText',
				action: 'Send a text message',
				description: 'Send a text message',
				routing: {
					request: {
						method: 'POST',
						url: '/api/sendText',
					},
				},
			},
		],
		default: '/api/sendText',
	},
];
export const ChattingFields: INodeProperties[] = [];
