import { Injectable } from '@angular/core';
import { CloudResource } from '../Models/CloudResource';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  public currentList: CloudResource[] = [];
}
