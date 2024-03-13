import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import {
  DefaultResource,
  Resource,
  Outputs,
} from 'src/app/Models/CloudResource';
import {
  GCP_ComputeEngine,
  GCP_StorageBucket,
  GCP_SubNetwork,
  GCP_VPCNetwork,
  ResourceProperties,
} from 'src/app/Models/ResourceProperties';
import { InputType } from 'src/app/enum/InputType';
import { ResourceType } from 'src/app/enum/ResourceType';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';
import { UpdateResourceConfig } from './UpdateResourceConfig';

@Component({
  selector: 'app-resource-config',
  templateUrl: './resource-config.component.html',
  styleUrls: ['./resource-config.component.scss'],
})
export class ResourceConfigComponent implements OnInit {
  constructor(private _modalDialogService: ModalDialogService) {}
  public faClose: IconDefinition = faClose;

  public closeModal() {
    this._modalDialogService.ActiveModal.dispose();
  }

  @Input() currentResource: ResourceType;
  @Input() currentIndex: number = -1;
  resConfig: Resource = new DefaultResource();
  @Input() config: Map<string, { type: InputType; val: string }> = new Map();
  @Input() currentOutput: Outputs[] = [];
  inputType = InputType;
  resourceType = ResourceType;

  ngOnInit(): void {
    console.log(this.config);
  }

  @Output()
  configUpdateEvent = new EventEmitter<{ id: number; res: Resource }>();

  set = false;
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
        this.listMap.set(name, data == 'false' ? 'false' : '');
        break;
    }
  }

  submit() {
    if (this.check && this.currentResource != null) {
      this.resConfig =
        UpdateResourceConfig(this.currentResource, this.listMap, this.config) ??
        this.resConfig;

      this.configUpdateEvent.emit({
        id: this.currentIndex,
        res: this.resConfig,
      });
    }
  }
}
