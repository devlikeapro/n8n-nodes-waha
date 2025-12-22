import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';
import {
	BASE_TRIGGER_DESCRIPTION,
	TRIGGER_DESCRIPTION,
	makeWebhookForEvents,
	CONFIGURE_WEBHOOK_NOTE,
	makeEventNote,
} from '../../base/trigger';

const event = 'group.v2.join';

export class WAHAGroupV2JoinTrigger implements INodeType {
	description: INodeTypeDescription = {
		...BASE_TRIGGER_DESCRIPTION,
		...TRIGGER_DESCRIPTION,
		displayName: 'WAHA Trigger (Group V2 Join)',
		name: 'wahaGroupV2JoinTrigger',
		description: 'When you joined or were added to a group',
		version: 1,
		outputs: [NodeConnectionType.Main],
		properties: [CONFIGURE_WEBHOOK_NOTE, makeEventNote([event])],
	};
	webhook = makeWebhookForEvents([event]);
}
