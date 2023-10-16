import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CloudResource } from '../Models/CloudResource';

@Injectable({
  providedIn: 'root'
})
export class StackService {

  constructor( private _http: HttpClient) { }

  public deploy(items: CloudResource[]): Observable<string> {
    return this._http
    .post('http://localhost:8080/deploy', JSON.stringify(items), {
      responseType: 'text',
    })
  }

  public getStack(): Observable<object> {
    return this._http.get('http://localhost:8080/stack');
  }
}
