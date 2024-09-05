import { parse } from './WAHANode.node'


test('OpenAPIParser', () => {
// @ts-ignore
	const {resourceNode, operations, fields} = parse()
	expect(resourceNode).toBeDefined()
	expect(operations).toBeDefined()
	expect(fields).toBeDefined()
});

