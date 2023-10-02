import { Component } from '@angular/core';
import { AddComponentService } from 'src/app/services/add-component.service';
import { ResourceType } from 'src/app/enum/ResourceType';
import { ResourceProperties } from 'src/app/Models/ResourceProperties';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss'],
})
export class ResourceListComponent {
  resourceType = ResourceType;
  viewAWS = false;
  viewGCP = false;
  

  constructor(private _addComponentService: AddComponentService) {}
  addComponent(componentName: ResourceType) {
    console.log(componentName);
    this._addComponentService.components.next(componentName);
  }

  toggleAWS(){
    this.viewAWS = !this.viewAWS;
  }
}
