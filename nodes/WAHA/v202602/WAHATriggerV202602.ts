import {
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import {
	BASE_TRIGGER_DESCRIPTION,
	CONFIGURE_WEBHOOK_NOTE,
	makeWebhookForSelectedEvents,
	TRIGGER_DESCRIPTION,
} from '../base/trigger';
import { configuredOutputs, events } from './utils';

const defaultEvent = 'message'


export class WAHATriggerV202602 implements INodeType {
	description: INodeTypeDescription = {
		...BASE_TRIGGER_DESCRIPTION,
		...TRIGGER_DESCRIPTION,
		version: 202602,
		outputs: `={{(${configuredOutputs})($parameter)}}`,
		properties: [CONFIGURE_WEBHOOK_NOTE, {
			displayName: 'Events',
			name: 'listenEvents',
			type: 'multiOptions',
			options: [
				...events.map(event => ({name: event, value: event})),
			],
			required: true,
			default: [
				defaultEvent
			],
		}],
	};
	webhook = makeWebhookForSelectedEvents()
}
