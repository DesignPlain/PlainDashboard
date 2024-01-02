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

  set = false
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
        this.listMap.set(name, data == "false" ? "false" : "");
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
              this.GetResourceInput(inputList[0]),
              this.GetResourceInput(inputList[1]),
              this.GetResourceInput(inputList[2]),
              this.GetResourceInput(inputList[3]));
            break;
          }
        case ResourceType.EC2:
          {
            let inputList: string[] = [];
            ResourceProperties.propertiesMap.get(ResourceType.EC2)?.forEach((z, f) => inputList.push(f));

            this.resConfig = new GCP_ComputeEngine(
              this.GetResourceInput(inputList[0]),
              this.GetResourceInput(inputList[1]),
              this.GetResourceInput(inputList[2]),
              this.GetResourceInput(inputList[3]),
              this.GetResourceInput(inputList[4]),
              this.GetResourceInput(inputList[5]),
              this.GetResourceInput(inputList[6]),
              this.GetResourceInput(inputList[7]));
            break;
          }
      };

      this.ConfigUpdateEvent.emit({ id: this.currentIndex, res: this.resConfig });
    }
  }

  GetResourceInput(arg: string): any {
    return this.listMap.get(arg) ?? this.config.get(arg)?.val
  }
}
