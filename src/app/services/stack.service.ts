import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CloudResource } from '../Models/CloudResource';

@Injectable({
  providedIn: 'root',
})
export class StackService {
  constructor(private _http: HttpClient) {}

  public deploy(items: CloudResource[]): Observable<string> {
    return this._http.post('/api/deploy', JSON.stringify(items), {
      responseType: 'text',
    });
  }

  public destroyStack(): Observable<object> {
    return this._http.get('/api/stack');
  }

  public getProjectConfig(): Observable<object> {
    return this._http.get('/api/getProjectConfig');
  }
  public uploadProjectConfig(
    file: File,
    projectName: string,
    awsKeyid: string,
    awsSecretKey: string
  ) {
    let formParams = new FormData();
    if (file != undefined) {
      formParams.append('file', file);
    }
    if (projectName != undefined) {
      formParams.append('projectName', projectName);
    }

    if (awsKeyid != undefined) {
      formParams.append('awsKeyid', awsKeyid);
    }

    if (awsSecretKey != undefined) {
      formParams.append('awsSecretKey', awsSecretKey);
    }
    return this._http.post('/api/uploadProjectConfig', formParams);
  }
}
