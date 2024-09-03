import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { CdkDragEnd, CdkDragMove } from '@angular/cdk/drag-drop';
import {
  faTrash,
  faGear,
  IconDefinition,
  faCopy,
  faFloppyDisk,
  faObjectGroup,
  faAngleRight,
  faAngleLeft,
  faTriangleExclamation,
  faFileWaveform,
  faCircleQuestion,
  faLayerGroup,
  faChartLine,
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
import {
  ApplicationStateService,
  Template,
} from 'src/app/services/application-state.service';
import { LineOptions } from '../line/line.component';
import { StackService } from 'src/app/services/stack.service';
import * as _ from 'lodash';
import { RESOURCE_LIST_WIDTH } from 'src/app/constants/board-constants';
import { Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';
import { DynamicUIProps } from '../resource-config/DynamicUIProps';
import { DynamicUIPropState } from '../resource-config/DynamicUIPropState';
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

  public faCopy: IconDefinition = faCopy;
  public faSave: IconDefinition = faFloppyDisk;
  public faObjectGroup: IconDefinition = faObjectGroup;

  view: number = 0;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  faLog = faFileWaveform;
  faAlert = faTriangleExclamation;
  faHelp = faCircleQuestion;
  faWorkSpace = faLayerGroup;
  faMetric = faChartLine;

  public currentOutput: { x: number; y: number; id: string } | null = null;
  public currentInput: { x: number; y: number; id: string } | null = null;
  public edgeObserver: Subject<LineOptions> = new Subject<LineOptions>();

  public selectionState: {
    start_x: number;
    start_y: number;
    end_x: number;
    end_y: number;
  } | null = null;

  selection_div_style = {
    position: 'absolute',
    top: '200px',
    left: '300px',
    width: '100px',
    height: '100px',
    border: '2px dashed rgba(0, 0, 0, 0)',
    //background: '#ffffff29',
    'border-color': 'rgba(0, 0, 0, 0.0)',
  };

  selected = false;
  selected_div_style = {
    position: 'absolute',
    //top: '200px',
    //left: '300px',
    width: '100px',
    height: '100px',
    border: '2px dashed rgba(0, 0, 0, 0)',
    'border-color': 'rgba(0, 0, 0, 0.30)',
    'background-color': 'rgb(255 255 255 / 10%)',
    display: 'none',
  };

  selected_box_coordinates = {
    start_x: 0,
    start_y: 0,
    end_x: 0,
    end_y: 0,
  };

  selected_position = {
    x: 0,
    y: 0,
  };

  selected_ids: string[] = [];

  selected_box_shape = { width: 0, height: 0 };
  cardToSelect: string;
  cardToUnSelect: string;
  templates: Template[] = [];

  // card_div_style = {
  //   border: '2px dashed rgba(0, 0, 0, 0)',
  //   'border-color': 'green',
  //   outline: '',
  //   'outline-offset': '',
  // };

  constructor(
    private _applicationStateService: ApplicationStateService,
    private _addComponentService: AddComponentService,
    private _renderer: Renderer2,
    private _localStorageService: LocalStorageService,
    private _stackService: StackService,
    private _modalService: ModalDialogService,
    private _element_ref: ElementRef
  ) {
    this._getState();
    this.templates = _applicationStateService.template;
  }

  ngOnInit(): void {
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

        item.name += '_' + item.id.toString().replaceAll('-', '');

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

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(e: any) {
    if (
      !e.target.className.includes('selected-div') &&
      Boolean(e.target.closest('div.selected-div'))
    ) {
      return;
    }

    let insideSelectedBox =
      e.clientX + this.getWindowLeftOffsetWithScroll() >=
        this.selected_box_coordinates.start_x &&
      e.clientY + this.getWindowTopOffsetWithScroll() >=
        this.selected_box_coordinates.start_y &&
      e.clientX + this.getWindowLeftOffsetWithScroll() <=
        this.selected_box_coordinates.start_x + this.selected_box_shape.width &&
      e.clientY + this.getWindowTopOffsetWithScroll() <=
        this.selected_box_coordinates.start_y + this.selected_box_shape.height;

    if (!insideSelectedBox) {
      this.selectionState = {
        start_x: e.clientX,
        start_y: e.clientY,
        end_x: 0,
        end_y: 0,
      };
    }

    if (!insideSelectedBox && !e.shiftKey) {
      this.dropSelectedBox();
      this.selected_ids.forEach((newId, oldId) => {
        let item = this.items.find((res) => res.id == newId) as CloudResource;
        item.selected = false;
      });

      this.selected_ids.splice(0, this.selected_ids.length);
    } else if (insideSelectedBox) {
      this.items.forEach((res_card) => {
        // console.log(res_card.position);
        if (
          e.clientX + this.getWindowLeftOffsetWithScroll() >=
            res_card.position.x - 8 &&
          e.clientY + this.getWindowTopOffsetWithScroll() >=
            res_card.position.y - 8 &&
          e.clientX + this.getWindowLeftOffsetWithScroll() <=
            res_card.position.x + res_card.shape.width + 36 &&
          e.clientY + this.getWindowTopOffsetWithScroll() <=
            res_card.position.y + res_card.shape.height + 36
        ) {
          if (this.selected_ids.every((id) => id != res_card.id)) {
            this.cardToSelect = res_card.id;
          } else {
            this.cardToUnSelect = res_card.id;
          }
        }
      });
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    if (this.currentOutput) {
      this.edgeObserver.next({
        isNew: true,
        selected: false,
        position: {
          x1: this.currentOutput.x,
          y1: this.currentOutput.y,
          x2: e.clientX + this.getWindowLeftOffsetWithScroll(),
          y2: e.clientY + this.getWindowTopOffsetWithScroll(),
        },
      });
      this.newLine = true;
    }

    if (this.cardToSelect != '') {
      this.cardToSelect = '';
    } else if (this.cardToUnSelect != '') {
      this.cardToUnSelect = '';
    }

    if (
      this.selectionState == null &&
      e.clientX + this.getWindowLeftOffsetWithScroll() >=
        this.selected_box_coordinates.start_x &&
      e.clientY + this.getWindowTopOffsetWithScroll() >=
        this.selected_box_coordinates.start_y &&
      e.clientX + this.getWindowLeftOffsetWithScroll() <=
        this.selected_box_coordinates.start_x + this.selected_box_shape.width &&
      e.clientY + this.getWindowTopOffsetWithScroll() <=
        this.selected_box_coordinates.start_y + this.selected_box_shape.height
    ) {
      console.log('In selection');
    } else {
      this.startSelectionBox(e);
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(e: any) {
    this.dropSelectionBox();

    if (this.cardToSelect != '') {
      let res_card = this.items.find((res) => res.id == this.cardToSelect);
      if (res_card) {
        this.selected_ids.push(res_card.id);
        res_card.selected = true;
      }
      this.cardToSelect = '';
      let max_selected_box_coordinates = {
        max_start_x: Number.MAX_VALUE,
        max_start_y: Number.MAX_VALUE,
        max_end_x: 0,
        max_end_y: 0,
      };
      this.selected_ids.forEach((newId, oldId) => {
        let item = this.items.find((res) => res.id == newId) as CloudResource;
        this.drawSelectedBox(item, max_selected_box_coordinates);
      });
    } else if (this.cardToUnSelect != '') {
      let ind = this.selected_ids.indexOf(this.cardToUnSelect);
      if (ind != -1) {
        let id = this.selected_ids.splice(ind, 1);
        console.log(this.selected_ids);
        let res_card = this.items.find((res) => res.id == this.cardToUnSelect);
        if (res_card) {
          res_card.selected = false;
        }
      }

      if (this.selected_ids.length == 0) {
        this.dropSelectedBox();
      } else {
        let max_selected_box_coordinates = {
          max_start_x: Number.MAX_VALUE,
          max_start_y: Number.MAX_VALUE,
          max_end_x: 0,
          max_end_y: 0,
        };
        this.selected_ids.forEach((newId, oldId) => {
          let item = this.items.find((res) => res.id == newId) as CloudResource;
          this.drawSelectedBox(item, max_selected_box_coordinates);
        });
      }

      this.cardToUnSelect = '';
    }

    if (this.currentInput != null && this.currentOutput) {
      let inputItem = this.items.find((x) => x.id == this.currentInput?.id);
      let outputItem = this.items.find((x) => x.id == this.currentOutput?.id);

      console.log(inputItem?.resourceType, outputItem?.resourceType);
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

    this._saveState();
  }

  private dropSelectedBox() {
    if (this.selected) {
      this.selected_div_style.display = 'none';
      this.selected_box_shape = { width: 0, height: 0 };
    }
  }

  private dropSelectionBox() {
    if (this.selectionState) {
      this.selectionState = null;
      this.selection_div_style['border-color'] = 'rgba(0, 0, 0, 0)';
      this.selection_div_style.width = '0px';
      this.selection_div_style.height = '0px';
    }
  }

  private startSelectionBox(e: any) {
    if (this.selectionState) {
      this.selection_div_style['border-color'] = 'rgba(0, 0, 0, 0.2)';
      this.selection_div_style.left =
        (
          this.selectionState.start_x + this.getWindowLeftOffsetWithScroll()
        ).toString() + 'px';

      this.selection_div_style.top =
        (
          this.selectionState.start_y + this.getWindowTopOffsetWithScroll()
        ).toString() + 'px';

      this.selectionState.end_x = e.clientX;
      this.selectionState.end_y = e.clientY;

      (this.selection_div_style.width =
        (e.clientX - this.selectionState.start_x).toString() + 'px'),
        (this.selection_div_style.height =
          (e.clientY - this.selectionState.start_y).toString() + 'px');

      let absolute_start_x =
        this.selectionState.start_x + this.getWindowLeftOffsetWithScroll();
      let absolute_start_y =
        this.selectionState.start_y + this.getWindowTopOffsetWithScroll();
      let absolute_end_x =
        this.selectionState.end_x + this.getWindowLeftOffsetWithScroll();
      let absolute_end_y =
        this.selectionState.end_y + this.getWindowTopOffsetWithScroll();

      let max_selected_box_coordinates = {
        max_start_x: Number.MAX_VALUE,
        max_start_y: Number.MAX_VALUE,
        max_end_x: 0,
        max_end_y: 0,
      };

      this.items.forEach((res_card) => {
        // console.log(res_card.position);
        if (
          res_card.position.x >= absolute_start_x &&
          res_card.position.y >= absolute_start_y &&
          res_card.position.x <= absolute_end_x &&
          res_card.position.y <= absolute_end_y
        ) {
          this.drawSelectedBox(res_card, max_selected_box_coordinates);

          if (this.selected_ids.every((id) => id != res_card.id)) {
            this.selected_ids.push(res_card.id);
            console.log(this.selected_ids);
          }
        } else {
          let ind = this.selected_ids.indexOf(res_card.id);
          if (ind != -1) {
            let id = this.selected_ids.splice(ind);
            console.log(this.selected_ids);
            res_card.selected = false;
            this.selected_div_style.display = 'none';
          }
        }
      });
    }
  }

  private drawSelectedBox(
    res_card: CloudResource,
    max_selected_box_coordinates: {
      max_start_x: number;
      max_start_y: number;
      max_end_x: number;
      max_end_y: number;
    }
  ) {
    if (res_card.position.x < max_selected_box_coordinates.max_start_x) {
      max_selected_box_coordinates.max_start_x = res_card.position.x;
    }

    if (res_card.position.y < max_selected_box_coordinates.max_start_y) {
      max_selected_box_coordinates.max_start_y = res_card.position.y;
    }

    if (
      res_card.position.x + res_card.shape.width >
      max_selected_box_coordinates.max_end_x
    ) {
      max_selected_box_coordinates.max_end_x =
        res_card.position.x + res_card.shape.width;
    }

    if (
      res_card.position.y + res_card.shape.height >
      max_selected_box_coordinates.max_end_y
    ) {
      max_selected_box_coordinates.max_end_y =
        res_card.position.y + res_card.shape.height;
    }

    this.selected_box_coordinates.start_x =
      max_selected_box_coordinates.max_start_x - 8;
    this.selected_box_coordinates.start_y =
      max_selected_box_coordinates.max_start_y - 8;
    this.selected_box_coordinates.end_x =
      max_selected_box_coordinates.max_end_x + 28;
    this.selected_box_coordinates.end_y =
      max_selected_box_coordinates.max_end_y + 28;

    this.selected_position = {
      x: this.selected_box_coordinates.start_x,
      y: this.selected_box_coordinates.start_y,
    };

    // let left = this.selected_box_coordinates.start_x;
    // let top = this.selected_box_coordinates.start_y;
    let width =
      this.selected_box_coordinates.end_x -
      this.selected_box_coordinates.start_x;
    let height =
      this.selected_box_coordinates.end_y -
      this.selected_box_coordinates.start_y;

    this.selected_box_shape = { width: width, height: height };

    this.selected_div_style.display = 'block';
    //this.selected_div_style.left = left.toString() + 'px';
    //this.selected_div_style.top = top.toString() + 'px';
    this.selected_div_style.width = width.toString() + 'px';
    this.selected_div_style.height = height.toString() + 'px';
    this.selected = true;

    res_card.selected = true;
  }

  selectCard(id: string, event: any) {
    let max_selected_box_coordinates = {
      max_start_x: Number.MAX_VALUE,
      max_start_y: Number.MAX_VALUE,
      max_end_x: 0,
      max_end_y: 0,
    };
    this.selected_ids.push(id);
    this.selected_ids.forEach((newId, oldId) => {
      let item = this.items.find((res) => res.id == newId) as CloudResource;
      this.drawSelectedBox(item, max_selected_box_coordinates);
    });
  }

  saveAsTemplate() {
    let templateResources: CloudResource[] = [];
    this.selected_ids.forEach((id) => {
      let oldRes = this.items.find((res) => res.id == id);
      if (oldRes) {
        oldRes.selected = false;
        let res = structuredClone(oldRes);
        if (res != undefined) {
          let oldId = res.id;
          // TODO: Update and provide placeholders.
          // res.id = uuidv4();
          res.name += '_template';
          res.title += '_template';

          templateResources.push(res);
        }
      }
    });

    let details_string: string = JSON.stringify(
      templateResources,
      replacer,
      '\t'
    );
    this._modalService.openTemplateConfigModal(details_string);
  }

  loadTemplateInstance(template_index: number) {
    let res = this.templates[template_index].res_details;
    let selected_resources: CloudResource[] = JSON.parse(res, reviver);

    let updatedIds: Map<string, string> = new Map();
    selected_resources.forEach((oldRes) => {
      if (oldRes) {
        oldRes.selected = false;
        let res = structuredClone(oldRes);
        if (res != undefined) {
          let oldId = res.id;
          res.id = uuidv4();
          res.name += '_1';
          res.title += '_1';
          res.position.x -= 100;
          res.position.y -= 100;

          this.items.push(res);
          updatedIds.set(oldId, res.id);
        }
      }
    });

    this.selected_ids = [...updatedIds.values()];
    let max_selected_box_coordinates = {
      max_start_x: Number.MAX_VALUE,
      max_start_y: Number.MAX_VALUE,
      max_end_x: 0,
      max_end_y: 0,
    };
    updatedIds.forEach((newId, oldId) => {
      let item = this.items.find((res) => res.id == newId) as CloudResource;

      this.drawSelectedBox(item, max_selected_box_coordinates);

      item?.inlets.splice(0, item.inlets.length);
      let newIMap: Map<string, LineCoordinates> = new Map();
      item?.inletMap.forEach((iv, ik) => {
        if (ik != 'dataType') {
          let newKey = updatedIds.get(ik) as string;
          if (newKey != undefined) {
            newIMap.set(newKey, iv);
            item.inlets.push(newKey);
          }
        }
        item.inletMap = newIMap;
      });

      item?.outlets.splice(0, item.outlets.length);
      let newOMap: Map<string, LineCoordinates> = new Map();
      item?.outletMap.forEach((iv, ik) => {
        if (ik != 'dataType') {
          let newKey = updatedIds.get(ik) as string;
          if (newKey != undefined) {
            newOMap.set(newKey, iv);
            item.outlets.push(newKey);
          }
        }

        item.outletMap = newOMap;
      });

      this.UpdateInletAndOutlet(item, item.id, -100, -100);
    });

    this._processLineData();
    this._saveState();
  }

  duplicateSelected() {
    let updatedIds: Map<string, string> = new Map();
    this.selected_ids.forEach((id) => {
      let oldRes = this.items.find((res) => res.id == id);
      if (oldRes) {
        oldRes.selected = false;
        let res = structuredClone(oldRes);
        if (res != undefined) {
          let oldId = res.id;
          res.id = uuidv4();
          res.name += '_1';
          res.title += '_1';
          res.position.x -= 100;
          res.position.y -= 100;

          this.items.push(res);
          updatedIds.set(oldId, res.id);
        }
      }
    });

    this.selected_ids = [...updatedIds.values()];
    let max_selected_box_coordinates = {
      max_start_x: Number.MAX_VALUE,
      max_start_y: Number.MAX_VALUE,
      max_end_x: 0,
      max_end_y: 0,
    };
    updatedIds.forEach((newId, oldId) => {
      let item = this.items.find((res) => res.id == newId) as CloudResource;

      this.drawSelectedBox(item, max_selected_box_coordinates);

      item?.inlets.splice(0, item.inlets.length);
      let newIMap: Map<string, LineCoordinates> = new Map();
      item?.inletMap.forEach((iv, ik) => {
        if (ik != 'dataType') {
          let newKey = updatedIds.get(ik) as string;
          if (newKey != undefined) {
            newIMap.set(newKey, iv);
            item.inlets.push(newKey);
          }
        }
        item.inletMap = newIMap;
      });

      item?.outlets.splice(0, item.outlets.length);
      let newOMap: Map<string, LineCoordinates> = new Map();
      item?.outletMap.forEach((iv, ik) => {
        if (ik != 'dataType') {
          let newKey = updatedIds.get(ik) as string;
          if (newKey != undefined) {
            newOMap.set(newKey, iv);
            item.outlets.push(newKey);
          }
        }

        item.outletMap = newOMap;
      });

      this.UpdateInletAndOutlet(item, item.id, -100, -100);
    });

    this._processLineData();
    this._saveState();
  }

  trashAllSelected() {
    this.selected_ids.forEach((id) => {
      this.trashResource(-1, id);
    });

    this.dropSelectedBox();
  }

  private getWindowTopOffsetWithScroll() {
    return (
      (this._element_ref.nativeElement as HTMLElement)
        .parentElement as HTMLElement
    ).scrollTop;
  }

  private getWindowLeftOffsetWithScroll() {
    return (
      -RESOURCE_LIST_WIDTH +
      (
        (this._element_ref.nativeElement as HTMLElement)
          .parentElement as HTMLElement
      ).scrollLeft
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
          this._getState();
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
          console.log(res);
          this._getState();
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

  public trashResource(index: number, id: string): void {
    let currentItem = this.items.find((x) => x.id == id);

    if (currentItem) {
      if ((index = -1)) {
        index = this.items.indexOf(currentItem);
      }
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
    console.log(item);
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
      `${item.lastError}`,
      `${item.yamlContent}`,
      item.id,
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

      //console.log('\n\n Base Type', val.val, objMap);

      let baseObj = objMap.get(toCamel(val.val));
      if (baseObj == undefined) {
        baseObj = objMap.get(val.val);
      }

      setDynamicUIMembers(baseObj, baseObj, val, map, 1);

      // Set inner config name to card title name
      objMap.set('name', name);

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

      //console.log('Final load:', this.currentConfig);
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
      //console.log('ObjMap: before null check ', objMap);
      if (!(objMap instanceof Map) && (objMap != null || objMap != undefined)) {
        objMap = new Map(Object.entries(objMap));
      }
      val.members.forEach((obj) => {
        const lmap = new Map();
        let objVal = undefined;

        // console.log('\n*****Call depth: ', depth);
        // console.log('ObjMap: ', objMap);
        // console.log('sen: ', lastObj);
        // console.log('obj', obj);
        // console.log('Value type', InputType[obj.type]);
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

        // console.log('Next ObjMap: ', objVal);
        // console.log('Next sen: ', lastObj);
        setDynamicUIMembers(lastObj, objVal, obj, lmap, depth + 1);

        // console.log('Parent:', val.val, obj.val, objVal);

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

        // console.log(map);
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
    // console.log(
    //   (
    //     (this._element_ref.nativeElement as HTMLElement)
    //       .parentElement as HTMLElement
    //   ).scrollTop
    // );
    this.currentOutput = {
      id: outPutId,
      x: startPosition.outputPositionX + this.getWindowLeftOffsetWithScroll(),
      y: startPosition.outputPositionY + this.getWindowTopOffsetWithScroll(),
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
      x: endPosition.inputPositionX + this.getWindowLeftOffsetWithScroll(),
      y: endPosition.inputPositionY + this.getWindowTopOffsetWithScroll(),
    };
  }

  public mouseLeft(): void {}

  public dragMove_Card($event: CdkDragMove, id: string): void {
    this.dropSelectionBox();
    let pos = $event.source.getFreeDragPosition();
    this.updateLinePosition(id, pos);
  }

  public dragEnd_Card($event: CdkDragEnd, id: string): void {
    this._saveState();
  }

  public dragMove_Selection($event: CdkDragMove): void {
    //this.dropSelectionBox();
    let pos = $event.source.getFreeDragPosition();

    let differenceinX = pos.x - this.selected_position.x;
    let differenceinY = pos.y - this.selected_position.y;

    console.log(differenceinX, differenceinY);

    this.selected_ids.forEach((id) => {
      let currentItem = this.items.find((x) => x.id == id);

      if (currentItem != null) {
        currentItem.position = {
          x: currentItem.position.x + differenceinX,
          y: currentItem.position.y + differenceinY,
        };

        this.UpdateInletAndOutlet(
          currentItem,
          id,
          differenceinX,
          differenceinY
        );

        this._processLineData();
      }
    });

    this.selected_box_coordinates.start_x = pos.x;
    this.selected_box_coordinates.start_y = pos.y;

    this.selected_position.x = pos.x;
    this.selected_position.y = pos.y;
  }

  public dragEnd_Selection($event: CdkDragEnd): void {
    this._saveState();
  }

  private updateLinePosition(id: string, pos: any) {
    let currentItem = this.items.find((x) => x.id == id);
    if (currentItem != null) {
      let differenceinX = pos.x - currentItem.position.x;
      let differenceinY = pos.y - currentItem.position.y;
      this.UpdateInletAndOutlet(currentItem, id, differenceinX, differenceinY);
      currentItem.position.x = pos.x;
      currentItem.position.y = pos.y;

      this._processLineData();
    }
  }

  private UpdateInletAndOutlet(
    currentItem: CloudResource,
    id: string,
    differenceinX: number,
    differenceinY: number
  ) {
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
          if (res != null) {
            this.items = JSON.parse(JSON.stringify(res, replacer), reviver);
            //console.log(this.items);
            this._processLineData();
          }
        },
        error: (_) => {
          let data = this._localStorageService.getLocalState();
          if (data != null) {
            this.items = JSON.parse(data, reviver);
            //console.log(this.items);
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
    //var data = JSON.parse(val, reviver);
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
