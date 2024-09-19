import { OpenAPIV3 } from 'openapi-types';
import { INodeProperties } from 'n8n-workflow';
import { OperationsCollector, OperationContext } from '@devlikeapro/n8n-openapi-node';

function sessionFirst(a: any, b: any) {
	if (a.name === 'session') {
		return -1;
	}
	if (b.name === 'session') {
		return 1;
	}
	return 0;
}

export class WAHAOperationsCollector extends OperationsCollector {
	// @ts-ignore
	parseFields(operation: OpenAPIV3.OperationObject, context: OperationContext): INodeProperties[] {
		const fields = super.parseFields(operation, context);
		fields.sort(sessionFirst);
		// @ts-ignore
		return fields;
	}
}
