const fs = require('fs');
const path = require('path');
const openapi = require('../nodes/WAHA/v202502/openapi.json');

// Get all webhooks
const webhooks = openapi.webhooks;
const events = Object.keys(webhooks);

// Mapping from event to node name
function eventToClassName(event) {
    const parts = event.split('.');
    return 'WAHA' + parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('') + 'Trigger';
}

function eventToNodeName(event) {
    const parts = event.split('.');
    return 'waha' + parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('') + 'Trigger';
}

function eventToDisplayName(event) {
    const parts = event.split('.');
    return 'WAHA Trigger (' + parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ') + ')';
}

const triggersDir = path.join(__dirname, '../nodes/WAHA/triggers');
if (!fs.existsSync(triggersDir)) {
    fs.mkdirSync(triggersDir, { recursive: true });
}

const generatedFiles = [];

for (const event of events) {
    const className = eventToClassName(event);
    const nodeName = eventToNodeName(event);
    const displayName = eventToDisplayName(event);
    const description = webhooks[event].post.summary || 'Trigger for ' + event;
    const fileName = `${className}.node.ts`;
    const subDir = path.join(triggersDir, className);

    // Create subdir if it doesn't exist
    if (!fs.existsSync(subDir)) {
        fs.mkdirSync(subDir, { recursive: true });
    }

    // Check if deprecated
    const isDeprecated = webhooks[event].post.deprecated;

    const fileContent = `import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';
import { BASE_TRIGGER_DESCRIPTION, TRIGGER_DESCRIPTION, makeWebhookForEvents, CONFIGURE_WEBHOOK_NOTE, makeEventNote } from '../../base/trigger';

const event = '${event}';

export class ${className} implements INodeType {
	description: INodeTypeDescription = {
		...BASE_TRIGGER_DESCRIPTION,
		...TRIGGER_DESCRIPTION,
		displayName: '${displayName}',
		name: '${nodeName}',
		description: '${description.replace(/'/g, "\\'")}',
		version: 1,
		outputs: [NodeConnectionType.Main],
		properties: [CONFIGURE_WEBHOOK_NOTE, makeEventNote([event])],
	};
	webhook = makeWebhookForEvents([event]);
}
`;

    fs.writeFileSync(path.join(subDir, fileName), fileContent);
    generatedFiles.push(`dist/nodes/WAHA/triggers/${className}/${className}.node.js`);
    console.log(`Generated ${fileName} in ${className}/`);
}

// Update package.json
const packageJsonPath = path.join(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Add new nodes to n8n.nodes if not already there
const existingNodes = packageJson.n8n.nodes;
const newNodes = [...existingNodes];

for (const file of generatedFiles) {
    if (!newNodes.includes(file)) {
        newNodes.push(file);
    }
}

packageJson.n8n.nodes = newNodes;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('Updated package.json');
