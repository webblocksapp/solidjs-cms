// @index('./*', f => `export { default as ${f.path.replace('\.\/', '')} } from '${f.path}.json'`)
export { default as common } from './common.json';
export { default as translation } from './translation.json';
