import {INodeType, INodeTypeDescription} from 'n8n-workflow';
import * as doc from './openapi.json'
import { Parser } from '../openapi/parser';
import {Pattern, update} from "../utils";
import {BASE_DESCRIPTION} from "../base/description";

const customDefaults: Pattern[]= [
	{
		find: {
			name: "session",
		},
		replace: {
			default: "={{ $json.session }}"
		}
	},
	{
		find: {
			name: "chatId",
		},
		replace: {
			default: "={{ $json.payload.from }}"
		}
	},
	{
		find: {
			name: "messageId",
		},
		replace: {
			default: "={{ $json.payload.id }}"
		}
	},
	{
		find: {
			name: "reply_to",
		},
		replace: {
			default: ""
		}
	},
]

// @ts-ignore
const parser = new Parser(doc);
parser.process()
update(customDefaults, parser.fields)

export class WAHANodeV202409 implements INodeType {
	description: INodeTypeDescription = {
		...BASE_DESCRIPTION,
		version: 20249,
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
		properties: parser.properties,
	};
}
