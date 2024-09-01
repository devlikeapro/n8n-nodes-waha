test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
// const paths = {
// 	'/api/entities': {
// 		get: {
// 			operationId: 'EntityController_list',
// 			summary: 'List all entities',
// 			parameters: [
// 				{
// 					name: 'all',
// 					required: false,
// 					in: 'query',
// 					example: false,
// 					description: 'Boolean flag description',
// 					schema: {
// 						type: 'boolean',
// 					},
// 				},
// 			],
// 			responses: {
// 				'200': {
// 					description: '',
// 					content: {
// 						'application/json': {
// 							schema: {
// 								type: 'array',
// 								items: {
// 									$ref: '#/components/schemas/Entity',
// 								},
// 							},
// 						},
// 					},
// 				},
// 			},
// 			tags: ['🖥️ Tag'],
// 		},
// 	},
// };
