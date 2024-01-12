
import {
    IExecuteFunctions,
} from 'n8n-core';
import { INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export class Waha implements INodeType {
    description: INodeTypeDescription = {
        // Basic node details will go here
        properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Chatting', value: 'chatting'
                    }
                ],
                default: 'chatting'
            },
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: [
                            'chatting',
                        ],
                    },
                },
                options: [
                    {
                        name: 'SendText',
                        value: 'sendText',
                        action: 'Send Text',
                        description: 'Send Text Message'
                    }
                ],
                default: 'sendText'
            },
            {
                displayName: 'Chat ID',
                name: 'chatId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        operation: ['sendText'],
                        resource: ['chatting']
                    }
                },
                default: '',
                placeholder: 'xxxxxxx@c.us',
                description: 'Chat ID',
            },
            {
                displayName: 'Text',
                name: 'text',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        operation: ['sendText'],
                        resource: ['chatting']
                    }
                },
                default: '',
                placeholder: '',
                description: 'Text to send',
            }
        ],
        version: 1,
        defaults: {
            name: 'Waha'
        },
        inputs: ['main'],
        outputs: ['main'],
        displayName: 'Waha',
        name: 'Waha',
        icon: 'file:waha.svg',
        group: ['whatsapp'],
        description: 'Connect with Whatsapp HTTP API',
        credentials: [
            {
                name: 'Waha',
                required: true
            }
        ],
        requestDefaults: {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const items = this.getInputData();
        const returnData: INodeExecutionData[] = [];
        const resource = this.getNodeParameter('resource', 0);
        const operation = this.getNodeParameter('operation', 0) as string;
        for (let i = 0; i < items.length; i++) {
            if (resource === "chatting") {
                if (operation === "sendText") {
                    const chatId = this.getNodeParameter('chatId', i) as string;
                    const text = this.getNodeParameter('text', i) as string;
                    const session = 'default';
                    const options: OptionsWithUri = {
                        headers: {
                            Accept: 'application/json',
                        },
                        method: 'POST',
                        body: {
                            chatId: chatId,
                            text: text,
                            session: session
                        },
                        baseUrl: '={{$credentials.url}}/api',
                        uri: 'sendText',
                        json: true
                    }
                    const responseData = await this.helpers.requestWithAuthentication.call(this, 'waha', options);
                    returnData.push(responseData)
                }
            }
        }
        return this.prepareOutputData(returnData);
    }
}