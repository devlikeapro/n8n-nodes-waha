import {
    IAuthenticateGeneric, ICredentialTestRequest,
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class WahaApi implements ICredentialType {
    name = 'wahaApi';
    displayName = 'Waha API';
    properties: INodeProperties[] = [
        {
            displayName: 'Host URL',
            name: 'url',
            type: 'string',
            default: '',
        },
        {
            displayName: 'API Key',
            name: 'apiKey',
            type: 'string',
            typeOptions: { password: true },
            default: '',
        },
        {
            displayName: 'Session',
            name: 'session',
            type: 'string',
            typeOptions: { password: true },
            default: 'default',
        },
    ];

    authenticate: IAuthenticateGeneric = {
        type: 'generic',
        properties: {
            headers: {
                'X-Api-Key': '={{$credentials.apiKey}}',
            },
        },
    };
    test: ICredentialTestRequest = {
        request: {
            baseURL: '={{$credentials.url}}/api',
            url: '/sessions',
        },
    };

}