import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { CdkDragEnd, CdkDragMove } from '@angular/cdk/drag-drop';
import {
  faTrash,
  faGear,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {
  CloudResource,
  Resource,
  Outputs,
  LineCoordinates,
} from 'src/app/Models/CloudResource';

import { ProviderType } from 'src/app/enum/ProviderType';
import { AddComponentService } from 'src/app/services/add-component.service';
import { take } from 'rxjs/operators';
import {
  LocalStorageService,
  replacer,
  reviver,
} from 'src/app/services/local-storage.service';
import { ApplicationStateService } from 'src/app/services/application-state.service';
import { LineOptions } from '../line/line.component';
import { StackService } from 'src/app/services/stack.service';
import * as _ from 'lodash';
import { RESOURCE_LIST_WIDTH } from 'src/app/constants/board-constants';
import { Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';
import {
  DynamicUIPropState,
  DynamicUIProps,
} from '../resource-config/resource-config.component';
import { VisualResource } from '../resource-list/VisualResource';
import { InputType } from 'src/app/enum/InputType';

import { GCP_ResourceType } from 'src/app/Models/Codegen/gcp_resources/ResourceType';

import { GCP_ResourceProperties } from 'src/app/Models/Codegen/gcp_resources/ResourceProperties';
import { AWS_ResourceProperties } from 'src/app/Models/Codegen/aws_resources/ResourceProperties';
import { AWS_ResourceType } from 'src/app/Models/Codegen/aws_resources/ResourceType';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent implements OnInit {
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    if (this.currentOutput) {
      this.edgeObserver.next({
        isNew: true,
        selected: false,
        position: {
          x1: this.currentOutput.x,
          y1: this.currentOutput.y,
          x2: e.clientX - RESOURCE_LIST_WIDTH,
          y2: e.clientY,
        },
      });
      this.newLine = true;
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(e: any) {
    if (this.currentInput != null && this.currentOutput) {
      let inputItem = this.items.find((x) => x.id == this.currentInput?.id);
      let outputItem = this.items.find((x) => x.id == this.currentOutput?.id);

      if (
        inputItem?.inlets.find((x) => x == outputItem?.id) ||
        outputItem?.outlets.find((x) => x == inputItem?.id)
      ) {
        this.currentOutput = null;
        this.currentInput = null;
        this.newLine = false;
        return;
      }
      inputItem?.inlets.push(outputItem?.id as string);
      outputItem?.outlets.push(inputItem?.id as string);

      inputItem?.inletMap.set(outputItem?.id as string, {
        x1: this.currentOutput.x,
        y1: this.currentOutput.y,
        x2: this.currentInput.x,
        y2: this.currentInput.y,
      });
      outputItem?.outletMap.set(inputItem?.id as string, {
        x1: this.currentInput.x,
        y1: this.currentInput.y,
        x2: this.currentOutput.x,
        y2: this.currentOutput.y,
      });
      this._processLineData();
    }
    this.currentOutput = null;
    this.currentInput = null;
    this.newLine = false;

    this._saveState()
  }

  public newLine: boolean = false;
  public showSideBar: boolean = false;
  public currentIndex: number = 0;
  public currentConfig: Map<string, DynamicUIPropState> = new Map<
    string,
    DynamicUIPropState
  >();
  public currentResourceType: GCP_ResourceType | AWS_ResourceType | undefined;
  public currentOut: Outputs[] = [];
  public items: CloudResource[] = [];
  // public resourceType = ResourceType;
  public hideline: boolean = true;
  public lineOptions: LineOptions[] = [];
  public currentDraggingCard: CloudResource | undefined;

  // Initializing font awesome icons
  public faTrash: IconDefinition = faTrash;
  public faGear: IconDefinition = faGear;
  public currentOutput: { x: number; y: number; id: string } | null = null;
  public currentInput: { x: number; y: number; id: string } | null = null;
  public edgeObserver: Subject<LineOptions> = new Subject<LineOptions>();

  constructor(
    private _applicationStateService: ApplicationStateService,
    private _addComponentService: AddComponentService,
    private _renderer: Renderer2,
    private _localStorageService: LocalStorageService,
    private _stackService: StackService,
    private _modalService: ModalDialogService
  ) {}

  ngOnInit(): void {
    this._getState();
    // Subcribe for component addition
    this._addComponentService.components.subscribe(
      (resource: VisualResource) => {
        const item = new CloudResource();
        item.id = uuidv4();
        item.resourceType = resource.ResourceType;
        item.name =
          resource.ProviderType == ProviderType.AWS
            ? AWS_ResourceType[resource.ResourceType]
            : GCP_ResourceType[resource.ResourceType];
        item.title = item.name.toString();
        item.providerType = resource.ProviderType;
        item.resourceConfig =
          resource.ProviderType == ProviderType.AWS
            ? AWS_ResourceProperties.GetResourceObject(
                resource.ResourceType as AWS_ResourceType
              )
            : GCP_ResourceProperties.GetResourceObject(
                resource.ResourceType as GCP_ResourceType
              );

        item.iconSrc = resource.iconSrc;
        this.items.push(item);
        this._saveState();
      }
    );
  }

  public onEnter(value: string, id: number): void {
    this.items[id].title = value;
    this._saveState();
  }

  public deploy(): void {
    this.items.forEach((x) => {
      x.deploying = true;
    });
    this._stackService
      .deploy(this.items)
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          this._processResponse(res);
          this.refresh();
        },
        error: () => {
          this.items.forEach((x) => {
            x.deploying = false;
          });
        },
        complete: () => {
          this.items.forEach((x) => {
            x.deploying = false;
          });
        },
      });
  }

  public destroy(): void {
    this.items.forEach((x) => {
      x.deploying = true;
    });
    this._stackService
      .destroyStack()
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          console.log(res)
          this.refresh();
        },
        error: () => {
          this.items.forEach((x) => {
            x.deploying = false;
          });
        },
        complete: () => {
          this.items.forEach((x) => {
            x.deploying = false;
          });
        },
      });
  }

  public trashShit(index: number, id: string): void {
    let currentItem = this.items.find((x) => x.id == id);
    if (currentItem) {
      currentItem.inlets.forEach((element: string) => {
        let tempItem = this.items.find((x) => x.id == element);
        if (tempItem) {
          tempItem.outletMap.delete(id);
          tempItem.outlets?.splice(tempItem.outlets?.indexOf(id), 1);
        }
      });

      currentItem.outlets.forEach((element: string) => {
        let tempItem = this.items.find((x) => x.id == element);
        if (tempItem) {
          tempItem.inletMap.delete(id);
          tempItem.inlets?.splice(tempItem.inlets?.indexOf(id), 1);
        }
      });
    }

    this.items.splice(index, 1);
    this._processLineData();
    this._saveState();
  }

  public SetResourceConfig(resourceIndex: number, item: CloudResource): void {
    this.currentConfig = new Map<string, DynamicUIPropState>();

    if (item.resourceConfig != undefined) {
      this.loadResourceConfig(
        item.title,
        item.resourceConfig,
        item.providerType,
        item.resourceType
      );
    } else {
      this.setDefaultResourceConfig(item);
    }

    this.currentResourceType = item.resourceType;
    this.currentOut = item.resOutputs?.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    this.currentIndex = resourceIndex;
    this.showSideBar = true;

    this._modalService.openComponentModal(
      this.currentIndex,
      this.currentResourceType,
      this.currentConfig,
      this.currentOut,
      this
    );
  }

  //#region [ResourceConfig methods]

  private setDefaultResourceConfig(item: CloudResource) {
    let propertiesMapResource = this.getPropertiesMapResource(
      item.providerType,
      item.resourceType
    );
    propertiesMapResource?.forEach((val) => {
      const map = new Map();
      val.members.forEach((obj) => {
        map.set(obj.val, new DynamicUIPropState(obj.type, '', '', undefined));
      });

      this.currentConfig.set(
        val.val,
        new DynamicUIPropState(val.type, '', '', map)
      );
    });
  }

  private getPropertiesMapResource(
    providerType: ProviderType,
    resourceType: GCP_ResourceType | AWS_ResourceType
  ) {
    if (providerType == ProviderType.AWS) {
      let propertiesMap = AWS_ResourceProperties.propertiesMap1.get(
        resourceType as AWS_ResourceType
      );

      if (propertiesMap == undefined) {
        propertiesMap = AWS_ResourceProperties.propertiesMap2.get(
          resourceType as AWS_ResourceType
        );
      }

      return propertiesMap;
    } else {
      let propertiesMap = GCP_ResourceProperties.propertiesMap.get(
        resourceType as GCP_ResourceType
      );
      return propertiesMap;
    }
  }

  private loadResourceConfig(
    name: string,
    res: Resource,
    providerType: ProviderType,
    resourceType: GCP_ResourceType | AWS_ResourceType
  ) {
    //(res as Bucket).Labels = new Map([["Key","8"]])
    let objMap = new Map(Object.entries(res));

    let propertiesMapResource = this.getPropertiesMapResource(
      providerType,
      resourceType
    );
    propertiesMapResource?.forEach((val) => {
      const map = new Map();

      // console.log('\n*****Call depth: ', 0);
      // console.log('ObjMap: ', objMap);
      // console.log('Value', val.val);
      // console.log('Value type', InputType[val.type]);

      console.log('\n\n Base Type', val.val, objMap);

      let baseObj = objMap.get(toCamel(val.val));
      if (baseObj == undefined) {
        baseObj = objMap.get(val.val);
      }
      setDynamicUIMembers(baseObj, baseObj, val, map, 1);

      objMap.set('Name', name);

      this.currentConfig.set(
        val.val,
        new DynamicUIPropState(
          val.type,
          objMap.get(val.val),
          val.description,
          map,
          val.isRequired,
          val.willReplaceOnChanges
        )
      );

      console.log('Final load:', this.currentConfig);
    });

    function toCamel(str: string): string {
      return str[0].toLowerCase() + str.substring(1);
    }

    function setDynamicUIMembers(
      lastObj: any,
      objMap: Map<string, any>,
      val: DynamicUIProps,
      map: Map<any, any>,
      depth: number
    ) {
      console.log('ObjMap: before null check ', objMap);
      if (!(objMap instanceof Map) && (objMap != null || objMap != undefined)) {
        objMap = new Map(Object.entries(objMap));
      }
      val.members.forEach((obj) => {
        const lmap = new Map();
        let objVal = undefined;

        console.log('\n*****Call depth: ', depth);
        console.log('ObjMap: ', objMap);
        console.log('sen: ', lastObj);
        console.log('obj', obj);
        console.log('Value type', InputType[obj.type]);
        if (val.type == InputType.Array || val.type == InputType.Map) {
          objVal = objMap;
          lastObj = null;
        } else {
          if (lastObj != null) {
            objVal = objMap?.get(toCamel(obj.val));
            if (objVal == undefined) {
              objVal = objMap?.get(val.val);
            }
          }
        }

        console.log('Next ObjMap: ', objVal);
        console.log('Next sen: ', lastObj);
        setDynamicUIMembers(lastObj, objVal, obj, lmap, depth + 1);

        console.log('Parent:', val.val, obj.val, objVal);

        map.set(
          obj.val,
          new DynamicUIPropState(
            obj.type,
            objVal,
            obj.description,
            lmap,
            obj.isRequired,
            obj.willReplaceOnChanges
          )
        );

        console.log(map);
      });
    }
  }

  //#endregion [ResourceConfig methods]

  public startConnection(
    startPosition: {
      outputPositionX: number;
      outputPositionY: number;
    },
    outPutId: string
  ): void {
    this.currentOutput = {
      id: outPutId,
      x: startPosition.outputPositionX - RESOURCE_LIST_WIDTH,
      y: startPosition.outputPositionY,
    };
  }

  public mouseEntered(
    endPosition: {
      inputPositionX: number;
      inputPositionY: number;
    },
    inputId: string
  ): void {
    this.currentInput = {
      id: inputId,
      x: endPosition.inputPositionX - RESOURCE_LIST_WIDTH,
      y: endPosition.inputPositionY,
    };
  }

  public mouseLeft(): void {}

  public dragMove($event: CdkDragMove, id: string): void {
    let pos = $event.source.getFreeDragPosition();
    this.updateLinePosition(id, pos);
  }

  public dragEnd($event: CdkDragEnd, id: string): void {
    let pos = $event.source.getFreeDragPosition();
    this.updateLinePosition(id, pos);
  }

  private updateLinePosition(id: string, pos: any) {
    let currentItem = this.items.find((x) => x.id == id);
    if (currentItem != null) {
      let differenceinX = pos.x - currentItem.position.x;
      let differenceinY = pos.y - currentItem.position.y;
      if (currentItem.inlets.length > 0) {
        currentItem.inlets.forEach((element) => {
          let tempInlet = this.items.find((x) => x.id == element);
          if (tempInlet) {
            let existingCords = tempInlet.outletMap.get(id);
            if (existingCords) {
              tempInlet.outletMap.set(id, {
                x1: existingCords?.x1 + differenceinX,
                y1: existingCords?.y1 + differenceinY,
                x2: existingCords?.x2,
                y2: existingCords?.y2,
              });
            }
          }
        });
        currentItem.inletMap.forEach((value: LineCoordinates, key: string) => {
          if (key != 'dataType') {
            value.x1 += differenceinX;
            value.y1 += differenceinY;
          }
        });
      }

      if (currentItem.outlets.length > 0) {
        currentItem.outletMap.forEach((value: LineCoordinates, key: string) => {
          if (key != 'dataType') {
            value.x2 += differenceinX;
            value.y2 += differenceinY;
          }
        });
      }
      currentItem.position.x = pos.x;
      currentItem.position.y = pos.y;

      this._saveState();
      this._processLineData();
    }
  }

  public onResize(ev: ResizeObserverEntry, id: number): void {
    this._renderer.setStyle(ev.target, 'width', ev.contentRect.width);
    this._renderer.setStyle(ev.target, 'height', ev.contentRect.height);
    this.items[id].shape.width = ev.contentRect.width;
    this.items[id].shape.height = ev.contentRect.height;
    this._saveState();
  }

  public updateConfig(id: number, res: Resource): void {
    this.items[id].resourceConfig = res;
    this._saveState();
  }

  public getLineOptions(item: CloudResource, outlet: string): LineOptions {
    return {
      selected: false,
      isNew: false,
      position: {
        x1: item.outletMap.get(outlet)?.x2 as number,
        y1: item.outletMap.get(outlet)?.y2 as number,
        x2: item.outletMap.get(outlet)?.x1 as number,
        y2: item.outletMap.get(outlet)?.y1 as number,
      },
    };
  }

  private _getState(): void {
    this._applicationStateService
      .getState()
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          this.items = JSON.parse(JSON.stringify(res, replacer), reviver);
          console.log(this.items);
          this._processLineData();
        },
        error: (_) => {
          let data = this._localStorageService.getLocalState();
          if (data != null) {
            this.items = JSON.parse(data, reviver);
            console.log(this.items);
            this._processLineData();
          }
        },
        complete: () => console.info('GetState completed'),
      });
  }

  private _saveState(): void {
    this._applicationStateService
      .saveState(this.items)
      .pipe(take(1))
      .subscribe({
        next: (data) => this._processResponse(data),
        error: (_) => {
          this._localStorageService.setLocalState(this.items);
        },
        complete: () => console.info('SaveState Completed'),
      });
  }

  private _processResponse(val: string): void {
    var data = JSON.parse(val, reviver);
    //console.log(data['message']);
  }

  private _processLineData() {
    this.lineOptions = [];
    this.items.forEach((data) => {
      if (data.outlets.length > 0) {
        data.outlets.forEach((outlet) => {
          this.lineOptions.push(this.getLineOptions(data, outlet));
        });
      }
    });
  }

  refresh() {
    window.location.reload();
  }
}
