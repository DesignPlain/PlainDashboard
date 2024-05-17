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
    //console.log(this.parent, ' With Config:', this.config);
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

    this.submit();
  }

  public UpdateResourceConfig(it: Map<string, any>): void {
    console.log(it);
    it.forEach((v, k) => {
      if (this.config.get(k)?.type == InputType.Map) {
        let m: Map<string, string> = new Map();
        v.forEach((array_val: Map<string, any>) => {
          m.set(array_val.get('Key'), array_val.get('Value'));
        });

        this.listMap.set(k, m);
      } else {
        //console.log(k, v[0]);
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
      arr.push(
        new Map([
          ['Key', k],
          ['Value', v],
        ])
      );
    });

    return arr;
  }
}
