import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DefaultResource, Resource, outputs } from 'src/app/Models/CloudResource';
import { GCP_ComputeEngine, GCP_StorageBucket, ResourceProperties } from 'src/app/Models/ResourceProperties';
import { InputType } from 'src/app/enum/InputType';
import { ResourceType } from 'src/app/enum/ResourceType';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  @Input() currentResource: ResourceType | undefined;
  @Input() currentIndex: number = -1;
  @Input() resConfig: Resource = new DefaultResource();
  @Input() config: Map<string, { type: InputType, val: string }> = new Map;
  @Input() currentOutput: outputs[] = [];
  inputType = InputType

  ngOnInit(): void { }

  @Output()
  ConfigUpdateEvent = new EventEmitter<{ id: number, res: Resource }>();

  listMap = new Map<string, any>();
  check = false;
  addToMap(name: string, data: any, type: InputType) {
    this.check = true;
    switch (type) {
      case InputType.String:
        this.listMap.set(name, data as string);
        break;
      case InputType.Number:
        this.listMap.set(name, data as number);
        break;
      case InputType.CheckBox:
        this.listMap.set(name, data == "on" ? true : false);
        break;
    }

  }

  submit() {
    if (this.check && this.currentResource != null) {
      switch (this.currentResource) {
        case ResourceType.Simple_Storage_Service:
          {
            let inputList: string[] = [];
            ResourceProperties.propertiesMap.get(ResourceType.Simple_Storage_Service)?.forEach((z, f) => inputList.push(f));

            this.resConfig = new GCP_StorageBucket(
              this.listMap.get(inputList[0]),
              this.listMap.get(inputList[1]),
              this.listMap.get(inputList[2]),
              this.listMap.get(inputList[3]));
            break;
          }
        case ResourceType.EC2:
          {
            let inputList: string[] = [];
            ResourceProperties.propertiesMap.get(ResourceType.EC2)?.forEach((z, f) => inputList.push(f));

            this.resConfig = new GCP_ComputeEngine(
              this.listMap.get(inputList[0]),
              this.listMap.get(inputList[1]),
              this.listMap.get(inputList[2]),
              this.listMap.get(inputList[3]),
              this.listMap.get(inputList[4]),
              this.listMap.get(inputList[5]),
              this.listMap.get(inputList[6]),
              this.listMap.get(inputList[7]));
            break;
          }
      };

      this.ConfigUpdateEvent.emit({ id: this.currentIndex, res: this.resConfig });
    }
  }
}
