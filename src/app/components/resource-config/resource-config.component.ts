import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Icon, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faClose,
  faGear,
  faInfoCircle,
  faInfo,
} from '@fortawesome/free-solid-svg-icons';
import {
  DefaultResource,
  Resource,
  Outputs,
} from 'src/app/Models/CloudResource';
import { InputType } from 'src/app/enum/InputType';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ResourceType } from 'src/app/Models/Codegen/GCP/ResourceType';

export class DynamicUIProps {
  constructor(
    public type: InputType,
    public val: string,
    public description: string,
    public members: DynamicUIProps[] = [],
    public isRequired: boolean = false,
    public willReplaceOnChanges: boolean = false
  ) {}
}
export class DynamicUIPropState {
  constructor(
    public type: InputType,
    public val: any,
    public description: string,
    public members: Map<string, DynamicUIPropState> = new Map(),
    public isRequired: boolean = false,
    public willReplaceOnChanges: boolean = false
  ) {}
}

@Component({
  selector: 'app-resource-config',
  templateUrl: './resource-config.component.html',
  styleUrls: ['./resource-config.component.scss'],
})
export class ResourceConfigComponent implements OnInit {
  constructor(private _modalDialogService: ModalDialogService) {}

  public faClose: IconDefinition = faClose;
  public faInfo: IconDefinition = faInfoCircle;
  public faGear: IconDefinition = faGear;

  public closeModal() {
    this._modalDialogService.ActiveModal.dispose();
  }

  public show = '';
  @Input() currentResource: ResourceType;
  @Input() currentIndex: number = -1;
  resConfig: Resource = new DefaultResource();
  @Input() config: Map<string, DynamicUIPropState> = new Map();
  @Input() currentOutput: Outputs[] = [];
  inputType = InputType;
  resourceType = ResourceType;

  ngOnInit(): void {
    //console.log(this.config);
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
      case InputType.Bool:
        this.listMap.set(name, data == 'false' ? 'false' : '');
        break;
    }
  }

  public UpdateResourceConfig(it: Map<string, any>): void {
    it.forEach((v, k) => {
      console.log(k, v);
      this.listMap.set(k, v);
    });

    console.log(this.listMap);
  }

  submit() {
    if (this.currentResource != null) {
      let currentConfig = new Map<string, any>();
      this.config.forEach((k, v) => {
        if (this.listMap.get(v) == undefined) {
          currentConfig.set(v, k.val);
        }
      });

      let resMap = new Map([...this.listMap, ...currentConfig]);
      this.resConfig = Object.fromEntries(resMap.entries()) as Resource;

      console.log('Final submit', this.resConfig);
      this.configUpdateEvent.emit({
        id: this.currentIndex,
        res: this.resConfig,
      });
    }
  }
}
