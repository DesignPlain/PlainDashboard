import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faCirclePlus,
  faDiagramProject,
  faInfoCircle,
  faRotate,
} from '@fortawesome/free-solid-svg-icons';
import { DynamicUIPropState } from '../DynamicUIPropState';
import { InputType } from 'src/app/enum/InputType';
import { Mode } from 'src/app/components/utilityComponents/key-value-array/key-value-array.component';
import {
  faPenToSquare,
  faSquareCaretDown,
  faSquareCaretUp,
} from '@fortawesome/free-regular-svg-icons';
import { Outputs } from 'src/app/Models/CloudResource';

import { Pipe, PipeTransform } from '@angular/core';
import { KeyValue } from '@angular/common';
import { StackService } from 'src/app/services/stack.service';

@Component({
  selector: 'app-resource-config-fields',
  templateUrl: './resource-config-fields.component.html',
  styleUrl: './resource-config-fields.component.scss',
})
export class ResourceConfigFieldsComponent implements OnInit {
  @ViewChildren('tooltipel', { read: ElementRef })
  tooltipRefs: QueryList<ElementRef>;

  constructor(private el: ElementRef, private _stackService: StackService) {}
  ngOnInit(): void {}
  public faInfo: IconDefinition = faInfoCircle;
  public faRotate: IconDefinition = faRotate;
  public faRelated: IconDefinition = faPenToSquare;

  public show = '';

  @Input() config: Map<string, DynamicUIPropState> = new Map();
  configViewOrder: Map<string, DynamicUIPropState> = new Map();
  @Input() parent: string = 'ROOT';
  @Input() currentOutput: Outputs[] = [];
  @Input() resId: string = '';

  inputType = InputType;

  @Output()
  configUpdateEvent = new EventEmitter<Map<string, any>>();

  set = false;
  listMap = new Map<string, any>();
  check = false;
  Mode = Mode;
  faCirclePlus = faCirclePlus;
  faDown = faSquareCaretDown;
  faUp = faSquareCaretUp;

  @Input()
  edit: boolean = false;

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (
      !this.tooltipRefs.some((element) =>
        element.nativeElement.contains(event.target)
      )
    ) {
      this.show = '';
    }
  }

  customOrder = (
    akv: KeyValue<string, any>,
    bkv: KeyValue<string, any>
  ): number => {
    let map = new Map<string, number>([
      ['name', 1],
      ['id', 1],
      ['arn', 1],
      ['description', 2],
      ['region', 3],
      ['zone', 3],
      ['serviceAccount', 4],
      ['tags', 4],
      ['versioning', 4],
      ['location', 5],
    ]);

    const a = map.has(akv.key)
      ? (map.get(akv.key) as number)
      : akv.key.charCodeAt(0) + 100;
    const b = map.has(bkv.key)
      ? (map.get(bkv.key) as number)
      : bkv.key.charCodeAt(0) + 100;

    return a > b ? 1 : b > a ? -1 : 0;
  };

  getConfig(keyname: string): DynamicUIPropState {
    let conf = this.config.get(keyname[0].toLowerCase() + keyname.substring(1));
    return conf as DynamicUIPropState;
  }

  hasContent(arg: Map<string, DynamicUIPropState>) {
    //let hasContent = [...arg.values()].every((x) => x.val == undefined);
    return true;
  }

  getValue(arg: any) {
    const filter = ['null', '""', '[]', '{}'];
    let val = JSON.stringify(arg);

    if (filter.some((token) => token == val) || val.length == 0) {
      return 'None';
    }

    if (val.startsWith('"') || val.endsWith('"')) {
      return val.substring(1, val.length - 1);
    }
    return val;
  }

  public showObj(ele: any): boolean {
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

  toKeyFormat(str: string): string {
    return str[0].toUpperCase() + str.substring(1);
  }

  timeout(): void {
    setTimeout(() => {
      this.show = '';
    }, 1000);
  }
  toStoreFormat(str: string): string {
    return str[0].toLowerCase() + str.substring(1);
  }

  addToMap(name: string, data: any, type: InputType) {
    this.check = true;
    switch (type) {
      case InputType.String:
        //if ((data as string).trim() != '') {
        this.listMap.set(this.toStoreFormat(name), data as string);
        //} else {
        // this.listMap.set(this.toStoreFormat(name), undefined);
        //}
        break;
      case InputType.File:
        //if ((data as string).trim() != '') {
        this.listMap.set(this.toStoreFormat(name), data as string);
        //} else {
        // this.listMap.set(this.toStoreFormat(name), undefined);
        //}
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

  getFromMap(name: string) {
    return this.listMap.get(this.toStoreFormat(name));
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
      if (!this.listMap.has(v)) {
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

  onFilechange(name: string, event: any) {
    console.log(event.target.files[0]);
    let file = event.target.files[0];

    this.upload(file);
    this.addToMap(this.toKeyFormat(name), file.name, InputType.File);
  }

  upload(file: File) {
    this._stackService
      .uploadResourceFile(file, this.resId)
      .subscribe((resp) => {
        console.log(
          resp?.toString() + ' Uploaded resource related file: ' + file.name
        );
      });
  }
}
