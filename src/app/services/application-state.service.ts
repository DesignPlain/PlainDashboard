import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CloudResource } from '../Models/CloudResource';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {

  constructor( private _http: HttpClient) { }

  public getState(): Observable<object> {
    return this._http.get('http://localhost:8080/state');
  }

  public saveState(items: CloudResource[]): Observable<string> {
    return this._http
      .post('http://localhost:8080/state', JSON.stringify(items), {
        responseType: 'text',
      })
  }
}
