import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { DefaultResource, Resource, Outputs } from 'src/app/Models/CloudResource';
import { GCP_ComputeEngine, GCP_StorageBucket, GCP_SubNetwork, GCP_VPCNetwork, ResourceProperties } from 'src/app/Models/ResourceProperties';
import { InputType } from 'src/app/enum/InputType';
import { ResourceType } from 'src/app/enum/ResourceType';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';

@Component({
  selector: 'app-resource-config',
  templateUrl: './resource-config.component.html',
  styleUrls: ['./resource-config.component.scss'],
})
export class ResourceConfigComponent implements OnInit {
  constructor(
    private _modalDialogService: ModalDialogService) {
  }
  public faClose: IconDefinition = faClose;

  public closeModal() {
    this._modalDialogService.ActiveModal.dispose();
  }

  @Input() currentResource: ResourceType;
  @Input() currentIndex: number = -1;
  resConfig: Resource = new DefaultResource();
  @Input() config: Map<string, { type: InputType, val: string }> = new Map;
  @Input() currentOutput: Outputs[] = [];
  inputType = InputType
  resourceType = ResourceType

  ngOnInit(): void {
    console.log(this.config);
  }

  @Output()
  configUpdateEvent = new EventEmitter<{ id: number, res: Resource }>();

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
      // TODO: Fix this checkbox logic 
      case InputType.CheckBox:
        this.listMap.set(name, data == "false" ? "false" : "");
        break;
    }

  }

  submit() {
    if (this.check && this.currentResource != null) {

      let inputList: string[] = [];
      switch (this.currentResource) {
        case ResourceType.Simple_Storage_Service:
          {
            ResourceProperties.propertiesMap
              .get(ResourceType.Simple_Storage_Service)?.forEach((_, f) => inputList.push(f));

            this.resConfig = new GCP_StorageBucket(
              this.GetResourceInput(inputList[0]),
              this.GetResourceInput(inputList[1]),
              this.GetResourceInput(inputList[2]),
              this.GetResourceInput(inputList[3]));
            break;
          }
        case ResourceType.EC2:
          {
            ResourceProperties.propertiesMap
              .get(ResourceType.EC2)?.forEach((_, f) => inputList.push(f));

            this.resConfig = new GCP_ComputeEngine(
              this.GetResourceInput(inputList[0]),
              this.GetResourceInput(inputList[1]),
              this.GetResourceInput(inputList[2]),
              this.GetResourceInput(inputList[3]),
              this.GetResourceInput(inputList[4]),
              this.GetResourceInput(inputList[5]),
              this.GetResourceInput(inputList[6]),
              this.GetResourceInput(inputList[7]),
              this.GetResourceInput(inputList[8]),
              this.GetResourceInput(inputList[9]),
              this.GetResourceInput(inputList[10]));
            break;
          }
        case ResourceType.Virtual_Private_Cloud:
          {
            ResourceProperties.propertiesMap
              .get(ResourceType.Virtual_Private_Cloud)?.forEach((_, f) => inputList.push(f));

            this.resConfig = new GCP_VPCNetwork(
              this.GetResourceInput(inputList[0]),
              this.GetResourceInput(inputList[1]),
              this.GetResourceInput(inputList[2]),
              this.GetResourceInput(inputList[3]),
              this.GetResourceInput(inputList[4]),);
            break;
          }
        case ResourceType.Subnet:
          {
            ResourceProperties.propertiesMap
              .get(ResourceType.Subnet)?.forEach((_, f) => inputList.push(f));

            this.resConfig = new GCP_SubNetwork(
              this.GetResourceInput(inputList[0]),
              this.GetResourceInput(inputList[1]),
              this.GetResourceInput(inputList[2]),
              this.GetResourceInput(inputList[3]),);
            break;
          }
      };

      this.configUpdateEvent.emit({ id: this.currentIndex, res: this.resConfig });
    }
  }

  GetResourceInput(arg: string): any {
    return this.listMap.get(arg) ?? this.config.get(arg)?.val
  }
}
