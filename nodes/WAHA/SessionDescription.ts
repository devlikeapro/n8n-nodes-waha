import { INodeProperties } from 'n8n-workflow/dist/Interfaces';

import { paths,components } from './openapi/openapi.json';
import { Parser } from './openapi/parser';

const parser = new Parser({paths, components});

export const SessionOperations: INodeProperties[] = parser.parse('Session', [
	{
		uri: '/api/sessions',
		method: 'get',
	},
	{
		uri: '/api/sessions/{session}',
		method: 'get',
	},
	{
		uri: '/api/sessions',
		method: 'post',
	},
	{
		uri: '/api/sessions/{session}',
		method: 'put',
	},
	{
		uri: '/api/sessions/{session}',
		method: 'delete',
	},
	{
		uri: '/api/sessions/{session}/me',
		method: 'get',
	},
	{
		uri: '/api/sessions/{session}/start',
		method: 'post',
	},
	{
		uri: '/api/sessions/{session}/stop',
		method: 'post',
	},
	{
		uri: '/api/sessions/{session}/logout',
		method: 'post',
	},
	{
		uri: '/api/sessions/{session}/restart',
		method: 'post',
	},
]);

export const SessionFields: INodeProperties[] = [];
