import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { VisualResource } from '../components/resource-list/VisualResource';

@Injectable({
  providedIn: 'root',
})
export class AddComponentService {
  public components: Subject<VisualResource> = new Subject<VisualResource>();
}
