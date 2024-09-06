import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';
import { WAHAv202409 } from './v202409/WAHAv202409';
import {BASE_DESCRIPTION} from "./base/node";

export class WAHA extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			...BASE_DESCRIPTION,
			defaultVersion: 202409,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			202409: new WAHAv202409(),
		};

		super(nodeVersions, baseDescription);
	}
}
