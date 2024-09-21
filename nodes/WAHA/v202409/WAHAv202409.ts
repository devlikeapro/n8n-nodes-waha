import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as doc from './openapi.json';
import { BASE_DESCRIPTION, NODE_DESCRIPTION } from '../base/node';
import { WAHAOperationsCollector } from '../openapi/WAHAOperationsCollector';
import {
	N8NPropertiesBuilder,
	N8NPropertiesBuilderConfig,
	Override,
} from '@devlikeapro/n8n-openapi-node';
import {WAHAOperationParser} from "../openapi/WAHAOperationParser";
import {WAHAResourceParser} from "../openapi/WAHAResourceParser";

const customDefaults: Override[] = [
	{
		find: {
			name: 'session',
			required: true,
			type: 'string',
		},
		replace: {
			default: '={{ $json.session }}',
		},
	},
	{
		find: {
			name: 'chatId',
			required: true,
			type: 'string',
		},
		replace: {
			default: '={{ $json.payload.from }}',
		},
	},
	{
		find: {
			name: 'messageId',
			type: 'string',
		},
		replace: {
			default: '={{ $json.payload.id }}',
		},
	},
	{
		find: {
			name: 'reply_to',
			type: 'string',
		},
		replace: {
			default: '',
		},
	},
];

const config: N8NPropertiesBuilderConfig = {
	OperationsCollector: WAHAOperationsCollector as any,
	operation: new WAHAOperationParser(),
	resource: new WAHAResourceParser(),
};
const parser = new N8NPropertiesBuilder(doc, config);
const properties = parser.build(customDefaults);

export class WAHAv202409 implements INodeType {
	description: INodeTypeDescription = {
		...BASE_DESCRIPTION,
		...NODE_DESCRIPTION,
		version: 202409,
		// @ts-ignore
		properties: properties,
	};
}
