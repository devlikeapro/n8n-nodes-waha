import { INodeProperties } from 'n8n-workflow/dist/Interfaces';

export const ChattingOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Chatting'],
			},
		},
		options: [
			{
				name: 'Send Text',
				value: 'Send Text',
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
		default: 'Send Text',
	},
];
export const ChattingFields: INodeProperties[] = [];
