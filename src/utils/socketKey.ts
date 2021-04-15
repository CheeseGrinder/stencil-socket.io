export function getSocketKey(target: Object): string {
  return Object.keys(target)
      .filter(key => target[key] instanceof Object)
      .filter(key => !!target[key].io)[0];
}