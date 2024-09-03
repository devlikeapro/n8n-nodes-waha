import { paths, components } from './openapi/openapi.json';
import { Parser } from './openapi/parser';

// @ts-ignore
export const parser = new Parser({ paths, components });
