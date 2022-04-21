export function convertStringToDateRecursively<T>(
  obj: any,
  checkDate: (s: string) => boolean
): T {
  for (const k in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, k)) {
      continue;
    }

    const value = obj[k];

    if (Array.isArray(value)) {
      value.map((el) => convertStringToDateRecursively(el, checkDate));
      continue;
    }

    if (typeof value === 'string' && checkDate(value)) {
      obj[k] = new Date(value) as any;
      continue;
    }

    if (typeof value === 'object') {
      obj[k] = convertStringToDateRecursively(value, checkDate);
    }
  }
  return obj;
}
