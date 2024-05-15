import { Component, Input } from '@angular/core';
import { Icon, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle, faRotate } from '@fortawesome/free-solid-svg-icons';
import {
  DynamicUIPropState,
  DynamicUIProps,
} from '../resource-config/resource-config.component';
import { InputType } from 'src/app/enum/InputType';

@Component({
  selector: 'app-resource-config-fields',
  templateUrl: './resource-config-fields.component.html',
  styleUrl: './resource-config-fields.component.scss',
})
export class ResourceConfigFieldsComponent {
  public faInfo: IconDefinition = faInfoCircle;
  public faRotate: IconDefinition = faRotate;

  public show = '';

  @Input() config: Map<string, DynamicUIPropState> = new Map();
  inputType = InputType;

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
}
