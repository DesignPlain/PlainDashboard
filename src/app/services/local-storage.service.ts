import { Injectable } from '@angular/core';
import { CloudResource } from '../Models/CloudResource';

export function replacer(key: any, value: any) {
  if (value instanceof Map) {
    value.set('dataType', 'Map');
    return Object.fromEntries(value);
  } else {
    return value;
  }
}

export function reviver(key: any, value: any) {
  if (typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      let map = new Map(Object.entries(value));
      map.delete('dataType');
      return map;
    }
  }
  return value;
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public getLocalState(): string | null {
    return localStorage.getItem('data');
  }

  public setLocalState(items: CloudResource[]): void {
    console.log('Saving state: ', items, JSON.stringify(items, replacer));
    localStorage.setItem('data', JSON.stringify(items, replacer));
  }
}
