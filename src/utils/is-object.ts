export function isObject(o: any): o is object {
   return o !== null && typeof o === 'object';
}
