import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';
import { WAHAv202409 } from './v202409/WAHAv202409';
import { WAHAv2 } from './v2/WAHAv2';
import {BASE_DESCRIPTION} from "./base/description";

export class WAHA extends VersionedNodeType {
	constructor() {
		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			2: WAHAv2(),
			202409: new WAHAv202409(),
		};

		const baseDescription: INodeTypeBaseDescription = {
			...BASE_DESCRIPTION,
			defaultVersion: 202409,
		};

		super(nodeVersions, baseDescription);
	}
}
