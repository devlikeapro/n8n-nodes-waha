import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as doc from './openapi.json';
import { BASE_DESCRIPTION, NODE_DESCRIPTION } from '../base/node';
import {WAHAOperationsCollector} from "../openapi/WAHAOperationsCollector";
import { OpenAPIN8NParser, ParserConfig } from '@devlikeapro/n8n-openapi-node';
import { Override } from '@devlikeapro/n8n-openapi-node';


const customDefaults: Override[] = [
	{
		find: {
			name: 'session',
		},
		replace: {
			default: '={{ $json.session }}',
		},
	},
	{
		find: {
			name: 'chatId',
		},
		replace: {
			default: '={{ $json.payload.from }}',
		},
	},
	{
		find: {
			name: 'messageId',
		},
		replace: {
			default: '={{ $json.payload.id }}',
		},
	},
	{
		find: {
			name: 'reply_to',
		},
		replace: {
			default: '',
		},
	},
];

const config: ParserConfig = {
	OperationsCollector: WAHAOperationsCollector as any,
	overrides: customDefaults,
}
const parser = new OpenAPIN8NParser(doc, config);
const result = parser.process()

export class WAHAv202409 implements INodeType {
	description: INodeTypeDescription = {
		...BASE_DESCRIPTION,
		...NODE_DESCRIPTION,
		version: 202409,
		// @ts-ignore
		properties: result,
	};
}
