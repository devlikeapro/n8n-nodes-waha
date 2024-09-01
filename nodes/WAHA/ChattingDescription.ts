import { INodeProperties } from 'n8n-workflow/dist/Interfaces';
import {parser} from "./openapiParser";

export const ChattingDescription: INodeProperties[] = parser.parse('Chatting', [
	{
		uri: '/api/sendText',
		method: 'post',
	},
	{
		uri: '/api/sendImage',
		method: 'post',
	},
	{
		uri: '/api/checkNumberStatus',
		method: 'get',
	},
	{
		uri: '/api/sendSeen',
		method: 'post',
	},
	{
		uri: '/api/startTyping',
		method: 'post',
	},
	{
		uri: '/api/stopTyping',
		method: 'post',
	},
	{
		uri: '/api/reaction',
		method: 'put',
	},
	{
		uri: '/api/star',
		method: 'put',
	},
]);
