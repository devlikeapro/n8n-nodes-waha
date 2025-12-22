import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';
import {
	BASE_TRIGGER_DESCRIPTION,
	TRIGGER_DESCRIPTION,
	makeWebhookForEvents,
	CONFIGURE_WEBHOOK_NOTE,
	makeEventNote,
} from '../../base/trigger';

const event = 'call.accepted';

export class WAHACallAcceptedTrigger implements INodeType {
	description: INodeTypeDescription = {
		...BASE_TRIGGER_DESCRIPTION,
		...TRIGGER_DESCRIPTION,
		displayName: 'WAHA Trigger (Call Accepted)',
		name: 'wahaCallAcceptedTrigger',
		description: 'The event is triggered when the call is accepted by the user.',
		version: 1,
		outputs: [NodeConnectionType.Main],
		properties: [CONFIGURE_WEBHOOK_NOTE, makeEventNote([event])],
	};
	webhook = makeWebhookForEvents([event]);
}
