import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import * as doc from './openapi.json';
import { Parser } from '../openapi/parser';
import { Pattern, update } from '../utils';
import { BASE_DESCRIPTION, NODE_DESCRIPTION } from '../base/node';

const customDefaults: Pattern[] = [
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

// @ts-ignore
const parser = new Parser(doc);
parser.process();
update(customDefaults, parser.fields);

export class WAHAv202409 implements INodeType {
	description: INodeTypeDescription = {
		...BASE_DESCRIPTION,
		...NODE_DESCRIPTION,
		version: 202409,
		properties: parser.properties,
	};
}
