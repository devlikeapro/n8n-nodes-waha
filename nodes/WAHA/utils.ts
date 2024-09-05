import * as lodash from 'lodash';

export interface Pattern {
	find: any;
	replace: any;
}

/**
 * Go over elements and if any has patter - update it with values
 */
export function update(patterns: Pattern[], elements: any[]) {
	for (const pattern of patterns) {
		for (const element of lodash.filter(elements, pattern.find)) {
			Object.assign(element, pattern.replace);
		}
	}
}
