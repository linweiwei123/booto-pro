export function isPromise(v: any) {
  return v && typeof v.then === 'function';
}

export function mergeArray(arr1: string[], arr2: string[] ){
  const combineSet = new Set();
  arr1.forEach(item => combineSet.add(item));
  arr2.forEach(item => combineSet.add(item));
  return Array.from(combineSet);
}