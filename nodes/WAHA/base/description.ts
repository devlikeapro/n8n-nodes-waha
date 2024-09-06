import {INodeTypeBaseDescription} from "n8n-workflow";

export const BASE_DESCRIPTION: INodeTypeBaseDescription = {
	name: 'WAHA',
	displayName: 'WAHA',
	icon: 'file:waha.svg',
	description: 'Connect with Whatsapp HTTP API',
	group: ['transform'],
};

export const BASE_TRIGGER_DESCRIPTION: INodeTypeBaseDescription = {
	displayName: 'WAHA Trigger',
	name: 'wahaTrigger',
	icon: 'file:waha.svg',
	group: ['trigger'],
	description: 'Handle WAHA events via webhooks',
};
