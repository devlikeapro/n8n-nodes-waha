import {INodeProperties, INodeType, INodeTypeDescription} from 'n8n-workflow';
import {TestDescription} from "./TestDescription";
import * as doc from './openapi/openapi.json';
import { Parser } from './openapi/parser';

export function parse(){
// @ts-ignore
	const parser = new Parser(doc);
	parser.process()
	const resourceNode = parser.resourceNode!!
	const operations = parser.operations
	const fields = parser.fields
	return {resourceNode, operations, fields}
}
const {resourceNode, operations, fields} = parse()
const additionalOperations: INodeProperties[] = []

// Include test operations
const includeTest = process.env.N8N_WAHA_MODE === "dev"
if (includeTest){
	const testOption = {
		name: "🐛 Test",
		value: "Test",
		description: "Just for playing around with n8n",
	}
	resourceNode.default = "Test"
	// insert at the start
	resourceNode.options!!.unshift(testOption)
	additionalOperations.push(...TestDescription)
}

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
			...additionalOperations,
			...operations,
			...fields,
		],
	};
}
