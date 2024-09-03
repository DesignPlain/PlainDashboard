import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CloudResource } from '../Models/CloudResource';
import { replacer } from './local-storage.service';
import { StackService } from './stack.service';

export class Template {
  public template_name: string = '';
  public template_description: string = '';
  public res_details: string = '';
}

@Injectable({
  providedIn: 'root',
})
export class ApplicationStateService {
  public template: Template[] = [];
  constructor(private _http: HttpClient) {}

  public getState(): Observable<object> {
    return this._http.get(StackService.HOSTNAME + '/api/state');
  }

  public saveState(items: CloudResource[]): Observable<string> {
    return this._http.post(
      StackService.HOSTNAME + '/api/state',
      JSON.stringify(items, replacer),
      {
        responseType: 'text',
      }
    );
  }

  public addTemplate(name: string, desc: string, details: string) {
    let newTemplate = {
      template_name: name,
      template_description: desc,
      res_details: details,
    };
    this.template.push(newTemplate);
  }
}
