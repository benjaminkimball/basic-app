export function flattenParam(param?: string | string[]): string | undefined {
  if (!param) return undefined;

  return Array.isArray(param) ? param[0] : param;
}
