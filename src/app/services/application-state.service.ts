import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CloudResource } from '../Models/CloudResource';
import { replacer } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ApplicationStateService {
  constructor(private _http: HttpClient) {}

  public getState(): Observable<object> {
    return this._http.get('/api/state');
  }

  public saveState(items: CloudResource[]): Observable<string> {
    return this._http.post('/api/state', JSON.stringify(items, replacer), {
      responseType: 'text',
    });
  }
}
