import {
	type IDataObject,
	type INodeExecutionData,
	INodeProperties,
	INodeTypeBaseDescription,
	type IWebhookFunctions,
	type IWebhookResponseData,
} from 'n8n-workflow';

export const BASE_TRIGGER_DESCRIPTION: INodeTypeBaseDescription = {
	displayName: 'WAHA Trigger',
	name: 'wahaTrigger',
	icon: 'file:waha.svg',
	group: ['trigger'],
	description: 'Handle WAHA events via webhooks',
};
export const TRIGGER_DESCRIPTION = {
	defaults: {
		name: 'WAHA Trigger',
	},
	inputs: [],
	credentials: [],
	webhooks: [
		{
			name: 'default',
			httpMethod: 'POST',
			responseMode: 'onReceived',
			path: 'waha',
		},
	],
};

export const CONFIGURE_WEBHOOK_NOTE: INodeProperties = {
	displayName:
		'Remember to configure WAHA instance (session or server) to send events to <b>Webhook URL</b>. ' +
		'<br/>Check <b>Docs</b> link above☝️',
	name: 'operation',
	type: 'notice',
	typeOptions: {
		theme: 'info',
	},
	default: '',
};

function noteText(events: string[]): string {
	const parts = ['<b>Events</b>:'];
	for (const event of events) {
		parts.push(`- ${event}`);
	}
	return parts.join('<br>');
}

export function makeEventNote(events: string[]): INodeProperties {
	return {
		displayName: noteText(events),
		name: 'operation',
		type: 'notice',
		typeOptions: {
			theme: 'info',
		},
		default: '',
	};
}

export function makeWebhookForEvents(events: string[]) {
	async function webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const bodyData = this.getBodyData();

		const eventType = bodyData.event as string | undefined;

		if (eventType === undefined || !events.includes(eventType)) {
			// If not eventType is defined or when one is defined, but we are not
			// listening to it do not start the workflow.
			return {};
		}
		const eventIndex: number = events.indexOf(eventType);
		const req = this.getRequestObject();

		const data = this.helpers.returnJsonArray(req.body as IDataObject);
		const empty: INodeExecutionData[] = [];
		const workflowData = events.map((_) => empty);
		workflowData[eventIndex] = data;

		return {
			workflowData: workflowData,
		};
	}

	return webhook;
}
