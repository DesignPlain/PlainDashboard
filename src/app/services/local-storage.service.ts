import { Injectable } from '@angular/core';
import { CloudResource } from '../Models/CloudResource';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public getLocalState(): string | null {
    return localStorage.getItem('data');
  }

  public setLocalState(items: CloudResource[]): void {
    localStorage.setItem('data', JSON.stringify(items));
  }
}
