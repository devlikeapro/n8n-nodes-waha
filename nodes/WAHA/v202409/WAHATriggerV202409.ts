import type {
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import * as doc from './openapi.json';
import {
	BASE_TRIGGER_DESCRIPTION,
	CONFIGURE_WEBHOOK_NOTE,
	makeEventNote, makeWebhookForEvents,
	TRIGGER_DESCRIPTION,
} from '../base/trigger';

function getEvents() {
	const schemas = doc.components.schemas;
	const schema = schemas.WAHAWebhookSessionStatus;
	const event = schema.properties.event;
	return event.enum;
}

const events = getEvents();
const outputs = events.map((_) => 'main');
const outputNames = events;

export class WAHATriggerV202409 implements INodeType {
	description: INodeTypeDescription = {
		...BASE_TRIGGER_DESCRIPTION,
		...TRIGGER_DESCRIPTION,
		version: 202409,
		outputs: outputs,
		outputNames: outputNames,
		properties: [CONFIGURE_WEBHOOK_NOTE, makeEventNote(events)],
	};
	webhook = makeWebhookForEvents(events)
}
