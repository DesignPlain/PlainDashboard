import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
  faSquareCaretDown,
  faSquareCaretUp,
  faSquarePlus,
} from '@fortawesome/free-regular-svg-icons';
import {
  faAdd,
  faCirclePlus,
  faClose,
  faCross,
} from '@fortawesome/free-solid-svg-icons';
import { DynamicUIPropState } from 'src/app/components/resource-config/resource-config.component';
import { InputType } from 'src/app/enum/InputType';

export enum Mode {
  Array,
  Map,
}

@Component({
  selector: 'key-value-array',
  templateUrl: './key-value-array.component.html',
  styleUrl: './key-value-array.component.scss',
})
export class KeyValueArrayComponent implements OnInit {
  @Input() mode: Mode = Mode.Array;
  @Input() config: Map<string, DynamicUIPropState> = new Map();

  @Input() data: Map<string, any>[] = [];
  // @Input() map_data: Map<string, any> = new Map();

  @Input() parentRes: string;

  @Output()
  configUpdateEvent = new EventEmitter<Map<string, any>>();

  listMap: Map<string, any>[] = [];

  public faClose: IconDefinition = faClose;
  public faCirclePlus: IconDefinition = faSquarePlus;
  public faDown: IconDefinition = faSquareCaretDown;
  public faUp: IconDefinition = faSquareCaretUp;

  ngOnInit(): void {
    console.log('Creating a ', Mode[this.mode], ' component', this.data);
    if (this.data == undefined) {
      this.data = [];
    }
    this.listMap = this.data;
  }

  getConfig(index: number): any {
    let c = this.config;

    c.forEach((v, k) => {
      if (this.listMap.length >= index + 1) {
        v.val = this.listMap[index].get(k);

        if (v.type != InputType.Array && v.type != InputType.Map) {
          populateData(v.members, v.val, 1);
        }
      }

      function populateData(
        members: Map<string, DynamicUIPropState>,
        listMap: any,
        nested: number
      ) {
        if (listMap != undefined) {
          members.forEach((val, key) => {
            if (val.type == InputType.Array || val.type == InputType.Map) {
              console.log('Nested count  is ', nested, listMap, key, val);
              val.val = listMap.get(key);
            } else {
              val.val = listMap?.get(key);
              populateData(val.members, val.val, nested + 1);
            }
          });
        }
      }
    });

    //console.log(c);

    return c;
  }

  public deleteValue(pos: number) {
    //console.log('Index is', pos, this.configValues);

    this.listMap.splice(pos, 1);
    this.submit(pos);
  }

  public AddValue() {
    console.log(this.config);
    this.listMap.push(new Map<string, any>());
    console.log('Array is :', this.listMap);
  }

  public show(ele: any): boolean {
    let val = ele.getAttribute('data');
    if (val == 'false') {
      return false;
    }

    return true;
  }

  public toggle(ele: any) {
    let val = ele.getAttribute('data');

    if (val == 'false') {
      ele.setAttribute('data', true);
    } else {
      ele.setAttribute('data', false);
    }
  }
  public UpdateResourceConfig(it: Map<string, any>, index: number): void {
    console.log('Got nested change : ', it);
    let nestedMap: Map<string, any> = it.get(this.parentRes);
    console.log('Array is :', index, this.listMap);

    nestedMap.forEach((v, k) => {
      console.log(k, v);
      let map1 = this.listMap[index];
      console.log('Map1', map1);
      map1.set(k, v);
      this.listMap[index] = map1;
    });
    console.log('Array is :', this.listMap);

    this.submit(index);
  }

  submit(index: number) {
    console.log(this.parentRes, this.listMap);

    this.configUpdateEvent.emit(
      new Map<string, any>([
        [this.parentRes, this.listMap.length > 0 ? this.listMap : undefined],
      ])
    );
  }
}
