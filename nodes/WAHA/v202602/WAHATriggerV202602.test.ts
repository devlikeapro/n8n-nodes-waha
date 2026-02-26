import { configuredOutputs } from './utils';
import { WAHATriggerV202602 } from './WAHATriggerV202602';

test('WAHATriggerV202602.outputs', () => {
	const node = new WAHATriggerV202602();
	expect(node.description.outputs).toEqual(`={{(${configuredOutputs})($parameter)}}`);
});
