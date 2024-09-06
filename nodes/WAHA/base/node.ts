import {INodeTypeBaseDescription} from "n8n-workflow";

export const BASE_DESCRIPTION: INodeTypeBaseDescription = {
	name: 'WAHA',
	displayName: 'WAHA',
	icon: 'file:waha.svg',
	description: 'Connect with Whatsapp HTTP API',
	group: ['transform'],
};


export const NODE_DESCRIPTION = {
	subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
	inputs: ['main'],
	outputs: ['main'],
	defaults: {
		name: 'WAHA',
	},
	credentials: [
		{
			name: 'wahaApi',
			required: true,
		},
	],
	requestDefaults: {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		baseURL: '={{$credentials.url}}',
	},
}
