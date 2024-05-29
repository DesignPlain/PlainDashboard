import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Icon, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle, faRotate } from '@fortawesome/free-solid-svg-icons';
import {
  DynamicUIPropState,
  DynamicUIProps,
} from '../resource-config/resource-config.component';
import { InputType } from 'src/app/enum/InputType';
import { Mode } from 'src/app/components/utilityComponents/key-value-array/key-value-array.component';

@Component({
  selector: 'app-resource-config-fields',
  templateUrl: './resource-config-fields.component.html',
  styleUrl: './resource-config-fields.component.scss',
})
export class ResourceConfigFieldsComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.parent, ' With Config:', this.config);
  }
  public faInfo: IconDefinition = faInfoCircle;
  public faRotate: IconDefinition = faRotate;

  public show = '';

  @Input() config: Map<string, DynamicUIPropState> = new Map();
  @Input() parent: string = 'ROOT';
  inputType = InputType;

  @Output()
  configUpdateEvent = new EventEmitter<Map<string, any>>();

  set = false;
  listMap = new Map<string, any>();
  check = false;
  Mode = Mode;

  toKeyFormat(str: string): string {
    return str[0].toUpperCase() + str.substring(1);
  }

  toStoreFormat(str: string): string {
    return str[0].toLowerCase() + str.substring(1);
  }

  addToMap(name: string, data: any, type: InputType) {
    this.check = true;
    switch (type) {
      case InputType.String:
        this.listMap.set(this.toStoreFormat(name), data as string);
        break;
      case InputType.Number:
        this.listMap.set(this.toStoreFormat(name), Number(data));
        break;
      // TODO: Fix this checkbox logic
      case InputType.Bool:
        this.listMap.set(this.toStoreFormat(name), data);
        break;
    }

    this.submit();
  }

  public UpdateResourceConfig(it: Map<string, any>): void {
    it.forEach((v, k) => {
      k = this.toStoreFormat(k);
      let config = this.config.get(k);

      console.log(this.config, k, v);
      if (config?.type == InputType.Map) {
        let m: Map<string, string> = new Map();
        v.forEach((kv: Map<string, any>) => {
          m.set(kv.get('key'), kv.get('value'));
        });

        this.listMap.set(k, m);
      } else if (
        config?.type == InputType.Array &&
        config.members.get('Value')?.description == 'GenericType'
      ) {
        let arr: Array<any> = [];
        v.forEach((kv: Map<string, any>) => {
          arr.push(kv.get('value'));
        });

        this.listMap.set(k, arr);
      } else {
        this.listMap.set(k, v);
      }
    });
    console.log(this.listMap);

    this.submit();
  }

  submit() {
    let currentConfig = new Map<string, any>();
    this.config.forEach((k, v) => {
      if (this.listMap.get(v) == undefined) {
        currentConfig.set(v, k.val);
      }
    });

    let resMap = new Map([...this.listMap, ...currentConfig]);

    if (this.parent == 'ROOT') {
      this.configUpdateEvent.emit(resMap);
    } else {
      this.configUpdateEvent.emit(
        new Map<string, any>([[this.parent, resMap]])
      );
    }
  }

  get_map_data(map_data: Map<string, string>) {
    let arr: Map<string, any>[] = [];
    if (map_data == undefined) {
      map_data = new Map();
    }

    map_data.forEach((v, k) => {
      if (k != 'dataType') {
        arr.push(
          new Map([
            ['Key', k],
            ['Value', v],
          ])
        );
      }
    });

    return arr;
  }

  get_array_data(
    arr_data: Array<any>,
    members: Map<string, DynamicUIPropState>
  ) {
    if (members.get('Value')?.description == 'GenericType') {
      let arr: Map<string, any>[] = [];
      if (arr_data == undefined) {
        arr_data = [];
      }

      arr_data.forEach((val) => {
        arr.push(new Map([['Value', val]]));
      });

      return arr;
    } else {
      return arr_data;
    }
  }
}
