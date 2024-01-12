import {
    IAuthenticateGeneric, ICredentialTestRequest,
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class Waha implements ICredentialType {
    name = 'waha';
    displayName = 'Waha';
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
            default: '',
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
            baseURL: '{{$credentials.url}}/api',
            url: '/sessions',
        },
    };

}