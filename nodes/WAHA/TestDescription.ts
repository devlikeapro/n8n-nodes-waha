import { INodeProperties } from 'n8n-workflow/dist/Interfaces';

export const TestDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Test'],
			},
		},
		options: [
			{
				name: 'Send Something',
				value: 'Send Something',
				action: 'Send a something message',
				description: 'Send a something message',
				routing: {
					request: {
						method: 'POST',
						url: '/api/sendText',
					},
				},
			},
		],
		default: 'Send Something',
	},
	{
		displayName: 'Variable',
		name: 'variable',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['Test'],
			},
		},
		default: '={{ $json.session }}',
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
				resource: ['Test'],
			},
		},
		default: 'Send Something',
	},
	{
		displayName: 'Multi',
		name: 'Multi',
		type: 'multiOptions',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['Test'],
			},
		},
		options: [
			{
				name: 'Option 1',
				value: 'Option 1',
				description: 'Send a something message',
			},
			{
				name: 'Option 2',
				value: 'Option 2',
				description: 'Send a something message',
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
				resource: ['Test']
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
