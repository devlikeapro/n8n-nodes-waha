
import { INodeOutputConfiguration, INodeParameters, NodeConnectionType } from 'n8n-workflow';
import * as doc from './openapi.json';

function getEvents() {
    const schemas = doc.components.schemas;
    const schema = schemas.WAHAWebhookSessionStatus;
    const event = schema.properties.event;
    return event.enum;
}

export const events = getEvents();

export const configuredOutputs = (parameters: INodeParameters) => {
    const listenEvents = parameters.listenEvents as string[];

    if (listenEvents.length == 0) {
        return []
    }

    let ruleOutputs: INodeOutputConfiguration[] = listenEvents.map((event, index): INodeOutputConfiguration => {
        return {
            type: NodeConnectionType.Main,
            displayName: event || index.toString(),
        };
    });

    return ruleOutputs
};
