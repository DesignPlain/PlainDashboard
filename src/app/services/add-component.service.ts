import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ResourceType } from '../enum/ResourceType';

@Injectable({
  providedIn: 'root'
})
export class AddComponentService {

  public components: Subject<ResourceType> = new Subject<ResourceType>();
}
