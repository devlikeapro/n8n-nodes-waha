import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import {TestDescription} from "./TestDescription";
import * as doc from './openapi/openapi.json';
import { Parser } from './openapi/parser';

// @ts-ignore
const parser = new Parser(doc);
parser.process()
const resourceNode = parser.resourceNode!!
const operations = parser.operations
const fields = parser.fields

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
			resourceNode,
			...operations,
			...fields,
			...TestDescription,
		],
	};
}
