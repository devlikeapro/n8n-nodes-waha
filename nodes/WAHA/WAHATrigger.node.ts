import type {
	IDataObject,
	IWebhookFunctions,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
} from 'n8n-workflow';


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
		outputs: ["main"],
		credentials: [ ],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [
			{
				displayName: 'Events',
				name: 'events',
				type: 'multiOptions',
				required: true,
				default: [],
				description: 'The event to listen to',
				// eslint-disable-next-line n8n-nodes-base/node-param-multi-options-type-unsorted-items
				options: [
					{
						name: '*',
						value: '*',
						description: 'Any time any event is triggered (Wildcard Event)',
					},
					{
						name: 'session.status',
						value: 'session.status',
						description: 'When a session status changes',
					},
					{
						// eslint-disable-next-line n8n-nodes-base/node-param-display-name-miscased
						name: 'message',
						value: 'message',
						description: 'When a message is received',
					},
				],
			},
		],
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const bodyData = this.getBodyData();
		const req = this.getRequestObject();

		const events = this.getNodeParameter('events', []) as string[];

		const eventType = bodyData.event as string | undefined;

		if (eventType === undefined || (!events.includes('*') && !events.includes(eventType))) {
			// If not eventType is defined or when one is defined, but we are not
			// listening to it do not start the workflow.
			return {};
		}

		return {
			workflowData: [this.helpers.returnJsonArray(req.body as IDataObject)],
		};
	}
}
