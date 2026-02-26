import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';
import { WAHAv202409 } from './v202409/WAHAv202409';
import {BASE_DESCRIPTION} from "./base/node";
import {WAHAv202502} from "./v202502/WAHAv202502";
import {WAHAv202602} from "./v202602/WAHAv202602";

export class WAHA extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			...BASE_DESCRIPTION,
			defaultVersion: 202602,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			202602: new WAHAv202602(),
			202502: new WAHAv202502(),
			202409: new WAHAv202409(),
		};

		super(nodeVersions, baseDescription);
	}
}
