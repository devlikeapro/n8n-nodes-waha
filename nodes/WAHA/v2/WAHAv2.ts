import { WAHAv202409 } from '../v202409/WAHAv202409';

export function WAHAv2() {
	// V2 version is basically 202409
	const node = new WAHAv202409();
	node.description.version = 2;
	return node;
}
