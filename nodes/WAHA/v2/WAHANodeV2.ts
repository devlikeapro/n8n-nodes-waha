import { WAHANodeV202409 } from '../v202409/WAHANodeV202409';

export function WAHANodeV2() {
	// V2 version is basically 202409
	const node = new WAHANodeV202409();
	node.description.version = 2;
	return node;
}
