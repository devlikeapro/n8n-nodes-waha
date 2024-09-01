import { INodeProperties } from 'n8n-workflow/dist/Interfaces';

export const AuthDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Auth'],
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
	{
		displayName: 'Test',
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme:'info',
		},
		displayOptions: {
			show: {
				resource: ['Auth'],
			},
		},
		default: 'Send Text',
	},
	{
		displayName: 'Multi',
		name: 'Multi',
		type: 'multiOptions',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Auth'],
			},
		},
		options: [
			{
				name: 'Option 1',
				value: 'Option 1',
				description: 'Send a text message',
			},
			{
				name: 'Option 2',
				value: 'Option 2',
				description: 'Send a text message',
			},
		],
		default: []
	},
	{
		displayName: 'Data to Save',
		name: 'dataToSave',
		placeholder: 'Add Saved Field',
		type: 'fixedCollection',
		typeOptions: {
			multipleValueButtonText: 'Add Saved Field',
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: ['Auth']
			},
		},
		default: {},
		options: [
			{
				displayName: 'Values',
				name: 'values',
				values: [
					{
						displayName: 'Key',
						name: 'key',
						type: 'string',
						default: '',
						placeholder: 'e.g. myKey',
					},
					{
						displayName: 'Data to Save',
						name: 'dataToSave',
						placeholder: 'Add Saved Field',
						type: 'fixedCollection',
						typeOptions: {
							multipleValueButtonText: 'Add Saved Field',
							multipleValues: true,
						},
						default: {},
						options: [
							{
								displayName: 'Values',
								name: 'values',
								values: [
									{
										displayName: 'Key',
										name: 'key',
										type: 'string',
										default: '',
										placeholder: 'e.g. myKey',
									},
									{
										displayName: 'Value',
										name: 'value',
										type: 'string',
										default: '',
										placeholder: 'e.g. myValue',
									},
								],
							},
						],
					},
				],
			},
		],
	},
];
