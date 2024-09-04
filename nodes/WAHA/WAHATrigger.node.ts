import type {
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IWebhookFunctions,
	IWebhookResponseData,
} from 'n8n-workflow';

const events = [
	'session.status',
	'message',
	'message.reaction',
	'message.any',
	'message.ack',
	'message.revoked',
	'state.change',
	'group.join',
	'group.leave',
	'presence.update',
	'poll.vote',
	'poll.vote.failed',
	'chat.archive',
	'call.received',
	'call.accepted',
	'call.rejected',
	'label.upsert',
	'label.deleted',
	'label.chat.added',
	'label.chat.deleted',
];

const options = events.map((event) => {
	return {
		name: event,
		value: event,
	};
});
const outputs = options.map((_) => 'main');
const outputNames = options.map((option) => option.value);

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
				path: 'webhook',
			},
		],
		properties: [],
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
