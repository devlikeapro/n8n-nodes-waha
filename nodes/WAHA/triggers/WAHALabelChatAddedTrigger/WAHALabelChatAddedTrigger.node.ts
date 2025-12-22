import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';
import {
	BASE_TRIGGER_DESCRIPTION,
	TRIGGER_DESCRIPTION,
	makeWebhookForEvents,
	CONFIGURE_WEBHOOK_NOTE,
	makeEventNote,
} from '../../base/trigger';

const event = 'label.chat.added';

export class WAHALabelChatAddedTrigger implements INodeType {
	description: INodeTypeDescription = {
		...BASE_TRIGGER_DESCRIPTION,
		...TRIGGER_DESCRIPTION,
		displayName: 'WAHA Trigger (Label Chat Added)',
		name: 'wahaLabelChatAddedTrigger',
		description: 'The event is triggered when a label is added to a chat',
		version: 1,
		outputs: [NodeConnectionType.Main],
		properties: [CONFIGURE_WEBHOOK_NOTE, makeEventNote([event])],
	};
	webhook = makeWebhookForEvents([event]);
}
