import * as doc from './openapi/openapi.json';
import { Parser } from './openapi/parser';


test('OpenAPIParser', () => {
// @ts-ignore
	const parser = new Parser(doc);
	parser.process()
	const resourceNode = parser.resourceNode!!
	const operations = parser.operations
	const fields = parser.fields
	expect(resourceNode).toBeDefined()
	expect(operations).toBeDefined()
	expect(fields).toBeDefined()
});

