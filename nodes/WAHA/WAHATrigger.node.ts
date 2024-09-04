import type {
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IWebhookFunctions,
	IWebhookResponseData,
} from 'n8n-workflow';

import * as doc from './openapi/openapi.json';

function getEvents() {
	const schemas = doc.components.schemas;
	const schema = schemas.WAHAWebhookSessionStatus;
	const event = schema.properties.event;
	return event.enum;
}

const events = getEvents()
const options = events.map((event) => {
	return {
		name: event,
		value: event,
	};
});
const outputs = options.map((_) => 'main');
const outputNames = options.map((option) => option.value);

/**
 * Construct html ul li
 */
function note(): string {
	const parts = ["<b>Events</b>:"]
	parts.push("")
	for (const event of events) {
		parts.push(`- ${event}`)
	}
	return parts.join("<br>")
}

export class WAHATrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'WAHA Trigger',
		name: 'wahaTrigger',
		icon: 'file:waha.svg',
		group: ['trigger'],
		version: 1,
		description: 'Handle WAHA events via webhooks',
		defaults: {
			name: 'WAHA Trigger',
		},
		inputs: [],
		outputs: outputs,
		outputNames: outputNames,
		credentials: [],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'waha',
			},
		],
		properties: [
			{
				displayName: "Remember to configure WAHA instance (session or server) to send events to <b>Webhook URL</b>",
				name: 'operation',
				type: 'notice',
				typeOptions: {
					theme: 'info',
				},
				default: '',
			},
		{
			displayName: note(),
			name: 'operation',
			type: 'notice',
			typeOptions: {
				theme: 'info',
			},
			default: '',
		}
		]
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
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
}
