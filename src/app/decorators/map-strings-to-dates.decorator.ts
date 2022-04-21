import { map, Observable } from 'rxjs';

import { isValidISODateString } from 'iso-datestring-validator';

import { convertStringToDateRecursively } from '../utils/convert-string-to-date-recursively.util';

export function mapStringsToDates(
  target: unknown,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: unknown[]) {
    return (<Observable<unknown>>originalMethod.apply(this, args)).pipe(
      map((r) => convertStringToDateRecursively(r, isValidISODateString))
    );
  };
}
