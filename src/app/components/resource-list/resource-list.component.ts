import { Component } from '@angular/core';
import { AddComponentService } from 'src/app/services/add-component.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent {
  constructor(private _addComponentService: AddComponentService) {}
  addComponent(componentName:string){
console.log(componentName)
this._addComponentService.components.next(componentName)

  }
}
