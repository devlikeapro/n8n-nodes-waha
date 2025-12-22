import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';
import {
	BASE_TRIGGER_DESCRIPTION,
	TRIGGER_DESCRIPTION,
	makeWebhookForEvents,
	CONFIGURE_WEBHOOK_NOTE,
	makeEventNote,
} from '../../base/trigger';

const event = 'group.leave';

export class WAHAGroupLeaveTrigger implements INodeType {
	description: INodeTypeDescription = {
		...BASE_TRIGGER_DESCRIPTION,
		...TRIGGER_DESCRIPTION,
		displayName: 'WAHA Trigger (Group Leave)',
		name: 'wahaGroupLeaveTrigger',
		description: 'Some one left a group.',
		version: 1,
		outputs: [NodeConnectionType.Main],
		properties: [CONFIGURE_WEBHOOK_NOTE, makeEventNote([event])],
	};
	webhook = makeWebhookForEvents([event]);
}
