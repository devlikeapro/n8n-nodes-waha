import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import {SessionFields, SessionOperations} from './SessionDescription';

export class WAHANode implements INodeType {
	description: INodeTypeDescription = {
		name: 'WAHANode',
		displayName: 'WAHA',
		icon: 'file:waha.svg',
		version: 2,
		description: 'Connect with Whatsapp HTTP API',
		subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
		inputs: ['main'],
		outputs: ['main'],
		group: ['whatsapp'],
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
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: '🖥️ Session',
						value: 'session',
					},
				],
				default: 'session',
			},
			...SessionOperations,
			...SessionFields,
		],
	};
}
