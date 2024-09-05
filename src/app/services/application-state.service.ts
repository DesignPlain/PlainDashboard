import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, take } from 'rxjs';
import { CloudResource } from '../Models/CloudResource';
import { replacer, reviver } from './local-storage.service';
import { StackService } from './stack.service';
import { v4 as uuidv4 } from 'uuid';

export class Template {
  public id: string = '';
  public template_name: string = '';
  public template_description: string = '';
  public res_details: string = '';
}

@Injectable({
  providedIn: 'root',
})
export class ApplicationStateService {
  public templateUpdates: Subject<boolean> = new Subject<boolean>();
  public templates: Template[];
  constructor(private _http: HttpClient) {}

  public getState(): Observable<object> {
    this.getTemplate();
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

  // TODO: Handle the API calls properly
  public getTemplate() {
    this._http
      .get(StackService.HOSTNAME + '/api/templates')
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          if (res != null) {
            this.templates = JSON.parse(JSON.stringify(res, replacer), reviver);
            this.templateUpdates.next(true);
          }
        },
        error: (_) => {},
        complete: () => console.info('GetTemplate completed'),
      });
  }

  // TODO: Handle the API calls properly
  public addTemplate(name: string, desc: string, details: string) {
    let newTemplate = {
      id: uuidv4(),
      template_name: name,
      template_description: desc,
      res_details: details,
    };

    this.templates.push(newTemplate);
    this.templateUpdates.next(true);

    this._http
      .post(
        StackService.HOSTNAME + '/api/templates',
        JSON.stringify(this.templates, replacer),
        {
          responseType: 'text',
        }
      )
      .subscribe({
        next: (data) => {},
        error: (_) => {},
        complete: () => console.info('SaveTemplate Completed'),
      });
  }

  // TODO: Handle the API calls properly
  public deleteTemplate(id: string) {
    let index = this.templates.findIndex((temp) => temp.id == id);
    this.templates.splice(index, 1);

    this.templateUpdates.next(true);

    this._http
      .post(
        StackService.HOSTNAME + '/api/templates',
        JSON.stringify(this.templates, replacer),
        {
          responseType: 'text',
        }
      )
      .subscribe({
        next: (data) => {},
        error: (_) => {},
        complete: () => console.info('SaveTemplate Completed'),
      });
  }
}
