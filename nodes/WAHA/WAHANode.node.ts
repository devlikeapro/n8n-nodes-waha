import { IExecuteFunctions } from 'n8n-core';
import {
    IBinaryData,
    IBinaryKeyData,
    INodeExecutionData,
    INodeType,
    INodeTypeDescription,
} from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export class WAHANode implements INodeType {
    description: INodeTypeDescription = {
        properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Chatting',
                        value: 'chatting',
                    },
                    {
                        name: 'Session',
                        value: 'session',
                    },
                    {
                        name: 'Auth',
                        value: 'auth',
                    },
                ],
                default: 'chatting',
            },
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['chatting'],
                    },
                },
                options: [
                    {
                        name: 'SendText',
                        value: 'sendText',
                        action: 'Send text',
                        description: 'Send Text Message',
                    },
                ],
                default: 'sendText',
            },
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['session'],
                    },
                },
                options: [
                    {
                        name: 'Log Out',
                        value: 'logout',
                        action: 'Log out',
                    },
                    {
                        name: 'Me',
                        value: 'me',
                        action: 'Me',
                    },
                    {
                        name: 'Sessions',
                        value: 'sessions',
                        action: 'Sessions',
                    },
                    {
                        name: 'Start',
                        value: 'start',
                        action: 'Start',
                    },
                    {
                        name: 'Stop',
                        value: 'stop',
                        action: 'Stop',
                    },
                ],
                default: 'start',
            },
            {
                displayName: 'Chat ID',
                name: 'chatId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        operation: ['sendText'],
                        resource: ['chatting'],
                    },
                },
                default: '',
                placeholder: 'xxxxxxx@c.us',
            },
            {
                displayName: 'Text',
                name: 'text',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        operation: ['sendText'],
                        resource: ['chatting'],
                    },
                },
                default: '',
                placeholder: '',
                description: 'Text to send',
            },
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['auth'],
                    },
                },
                options: [
                    {
                        name: 'QR',
                        value: 'qr',
                        action: 'QR',
                    },
                ],
                default: 'qr',
            },
            {
                displayName: 'Webhook URL',
                name: 'webhookUrl',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        operation: ['start'],
                        resource: ['session'],
                    },
                },
                default: '',
                placeholder: 'https://webhook.site/',
            },
        ],
        version: 2,
        defaults: {
            name: 'WAHA',
        },
        inputs: ['main'],
        outputs: ['main'],
        displayName: 'WAHA',
        name: 'WAHANode',
        icon: 'file:waha.svg',
        group: ['whatsapp'],
        description: 'Connect with Whatsapp HTTP API',
        credentials: [
            {
                name: 'wahaApi',
                required: true,
            },
        ],
        requestDefaults: {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            baseURL: '={{$credentials.url}}/api',
        },
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const cred = await this.getCredentials('wahaApi');
        const items = this.getInputData();
        const returnData: INodeExecutionData[] = [];
        const resource = this.getNodeParameter('resource', 0);
        const operation = this.getNodeParameter('operation', 0) as string;
        var options: OptionsWithUri = {
            uri: `${cred.url}/api`,
            json: true,
        };
        for (let i = 0; i < items.length; i++) {
            if (resource === 'chatting') {
                if (operation === 'sendText') {
                    const chatId = this.getNodeParameter('chatId', i) as string;
                    const text = this.getNodeParameter('text', i) as string;
                    const session = 'default';
                    options.method = 'POST';
                    options.uri += '/sendText';
                    options.body = {
                        chatId: chatId,
                        text: text,
                        session: session,
                    };
                    const responseData = await this.helpers.requestWithAuthentication.call(
                        this,
                        'wahaApi',
                        options,
                    );
                    returnData.push({
                        json: responseData,
                    });
                }
            } else if (resource === 'session') {
                if (operation === 'start') {
                    const url = this.getNodeParameter('webhookUrl', i) as string;
                    options.method = 'POST';
                    options.uri += '/sessions/start';
                    options.body = {
                        name: 'default',
                        config: {
                            proxy: null,
                            webhooks: [
                                {
                                    url: url,
                                    events: ['message', 'session.status'],
                                    hmac: null,
                                    retries: null,
                                    customHeaders: null,
                                },
                            ],
                        },
                    };
                    const responseData = await this.helpers.requestWithAuthentication.call(
                        this,
                        'wahaApi',
                        options,
                    );
                    returnData.push({
                        json: responseData,
                    });
                } else if (operation === 'stop') {
                    options.method = 'POST';
                    options.uri += '/sessions/stop';
                    options.body = {
                        name: cred.session,
                        logout: false,
                    };
                    const responseData = await this.helpers.requestWithAuthentication.call(
                        this,
                        'wahaApi',
                        options,
                    );
                    returnData.push({
                        json: responseData,
                    });
                } else if (operation === 'logout') {
                    options.method = 'POST';
                    options.uri += '/sessions/stop';
                    options.body = {
                        name: cred.session,
                    };
                    const responseData = await this.helpers.requestWithAuthentication.call(
                        this,
                        'wahaApi',
                        options,
                    );
                    returnData.push({
                        json: responseData,
                    });
                } else if (operation === 'sessions') {
                    options.method = 'GET';
                    options.uri += '/sessions';
                    options.qs = {
                        all: 'true',
                    };
                    const responseData = await this.helpers.requestWithAuthentication.call(
                        this,
                        'wahaApi',
                        options,
                    );
                    returnData.push({
                        json: responseData,
                    });
                } else if (operation === 'me') {
                    options.method = 'GET';
                    options.uri += `/sessions/${cred.session}/me`;
                    const responseData = await this.helpers.requestWithAuthentication.call(
                        this,
                        'wahaApi',
                        options,
                    );
                    returnData.push({
                        json: responseData,
                    });
                }
            } else if (resource === 'auth') {
                if (operation === 'qr') {
                    options.method = 'GET';
                    options.uri += `/${cred.session}/auth/qr?format=image`;
                    const responseData = await this.helpers.requestWithAuthentication.call(
                        this,
                        'wahaApi',
                        options,
                    );
                    let fileName = 'qrcode.png';
                    const mimeType = responseData.mimetype;
                    // binaryData = Buffer.from(JSON.stringify(responseData));
                    const binaryPropertyName = 'qrcode';
                    const data = responseData.data;
                    const binary = {
                        [binaryPropertyName]: { data, fileName, mimeType } as IBinaryData,
                    } as IBinaryKeyData;
                    returnData.push({
                        json: responseData,
                        binary,
                    });
                }
            }
        }
        return this.prepareOutputData(returnData);
    }
}
