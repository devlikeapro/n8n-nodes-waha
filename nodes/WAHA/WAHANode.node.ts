import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';
import { WAHANodeV202409 } from './v202409/WAHANodeV202409';
import { WAHANodeV2 } from './v2/WAHANodeV2';
import {BASE_DESCRIPTION} from "./base/description";

export class WAHANode extends VersionedNodeType {
	constructor() {
		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			2: WAHANodeV2(),
			202409: new WAHANodeV202409(),
		};

		const baseDescription: INodeTypeBaseDescription = {
			...BASE_DESCRIPTION,
			defaultVersion: 202409,
		};

		super(nodeVersions, baseDescription);
	}
}
