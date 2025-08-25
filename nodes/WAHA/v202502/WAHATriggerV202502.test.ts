import { configuredOutputs } from './utils';
import { WAHATriggerV202502 } from './WAHATriggerV202502';

test('WAHATriggerV202502.outputs', () => {
	const node = new WAHATriggerV202502();
	expect(node.description.outputs).toEqual(`={{(${configuredOutputs})($parameter)}}`);
});
