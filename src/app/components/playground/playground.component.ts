import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
} from '@angular/core';
import {
  CdkDragDrop,
  CdkDragEnd,
  CdkDrag,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { faTrash, faGear } from '@fortawesome/free-solid-svg-icons';
import {
  CloudResource,
  DefaultResource,
  Resource,
  lineCoordinates,
} from 'src/app/Models/CloudResource';
import {
  GCP_ComputeEngine,
  GCP_StorageBucket,
  ResourceProperties,
} from 'src/app/Models/ResourceProperties';
import { InputType } from 'src/app/enum/InputType';
import { ProviderType, ResourceType } from 'src/app/enum/ResourceType';
import { AddComponentService } from 'src/app/services/add-component.service';
import { DrawLineService } from 'src/app/services/draw-line.service';
import { ResizeObserverDirective } from '../../resize-observer.directive';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

export interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent implements OnInit {
  @ViewChild('lineCanvas', { static: true }) lineCanvas: ElementRef | undefined;
  endButtonDisabled = true;
  showSideBar = false;
  currentIndex = 0;
  firstX = 0;
  firstY = 0;
  faTrash = faTrash;
  faGear = faGear;
  currentConfig = new Map<string, { type: InputType; val: any }>();
  currentResourceType: ResourceType | undefined;
  currentInlet: number;

  constructor(
    private host: ElementRef,
    private http: HttpClient,
    private _addComponentService: AddComponentService,
    private _lineService: DrawLineService,
    private renderer: Renderer2
  ) {}
  public items: CloudResource[] = [];
  resourceType = ResourceType;
  a = 'sd';

  ngOnInit(): void {
    this.getState();
    this._addComponentService.components.subscribe(
      (componentName: ResourceType) => {
        const item = new CloudResource();
        item.resourceType = componentName;
        item.name = ResourceType[componentName];
        item.title = item.name.toString();
        item.providerType = ProviderType.GCP;
        item.resourceConfig = undefined;
        this.items.push(item);
        this.saveState();
      }
    );

    this._lineService.initialize(
      this.lineCanvas?.nativeElement as HTMLCanvasElement
    );

    const observer = new ResizeObserver((entries) => {
      console.log(entries);
    });

    const container = document.getElementById('Card');
    if (container != null) {
      observer.observe(container);
    }
  }

  onEnter(value: string, id: number) {
    this.items[id].title = value;
    this.saveState();
  }

  deploy() {
    this.http
      .post('http://localhost:8080/deploy', JSON.stringify(this.items), {
        responseType: 'text',
      })
      .subscribe((res) => this.processResponse(res));
  }

  destroy() {
    this.http
      .get('http://localhost:8080/stack')
      .subscribe((res) => console.log(res));
  }

  getState() {
    this.http.get('http://localhost:8080/state').subscribe({
      next: (res) => (this.items = JSON.parse(JSON.stringify(res))),
      error: (_) => {
        let data = localStorage.getItem('data');
        if (data != null) {
          this.items = JSON.parse(data);
          this.items.forEach((item) => {
            item.inletMap = new Map<number, lineCoordinates>(
              JSON.parse(item.inletMapString)
            );
            item.outletMap = new Map<number, lineCoordinates>(
              JSON.parse(item.outletMapString)
            );
          });
          this.redrawCanvas();
        }
      },
      complete: () => console.info('GetState completed'),
    });
  }

  saveState() {
    this.http
      .post('http://localhost:8080/state', JSON.stringify(this.items), {
        responseType: 'text',
      })
      .subscribe({
        next: (data) => this.processResponse(data),
        error: (_) => {
          this.items.forEach((item) => {
              item.inletMapString = JSON.stringify([...item.inletMap]);
              item.outletMapString = JSON.stringify([...item.outletMap]);
          });
          localStorage.setItem('data', JSON.stringify(this.items));
        },
        complete: () => console.info('SaveState Completed'),
      });
  }

  processResponse(val: string) {
    var data = JSON.parse(val);
    console.log(data['message']);
  }

  ngAfterViewInit() {
    if (this.lineCanvas) {
      const parentWidth =
        this.lineCanvas?.nativeElement.parentElement.clientWidth;
      const parentHeight =
        this.lineCanvas?.nativeElement.parentElement.clientHeight;
      this.lineCanvas.nativeElement.width = parentWidth;
      this.lineCanvas.nativeElement.height = parentHeight;
    }
  }

  trashShit(id: number): void {
    console.log(id);
    let currentItem = this.items[id];
    currentItem.outlets.forEach((element) => {
      if (this.items[element]?.inletMap) {
        this.items[element].inletMap?.delete(id);
        this.items[element].inlets?.splice(this.items[element].inlets?.indexOf(id), 1);
      }
    });
    currentItem.inlets.forEach((element) => {
      if (this.items[element]?.outletMap) {
        this.items[element].outletMap?.delete(id);
        this.items[element].outlets?.splice(this.items[element].outlets?.indexOf(id), 1);
      }
    });


    this.items.splice(id, 1);
    this.redrawCanvas();
    this.saveState();
  }

  toggleSidebar(i: number, item: CloudResource): void {
    if (!this.showSideBar) {
      if (item.resourceConfig != undefined) {
        switch (item.resourceType) {
          case ResourceType.Simple_Storage_Service: {
            let res = item.resourceConfig as GCP_StorageBucket;
            let objMap = new Map(Object.entries(res));
            ResourceProperties.propertiesMap
              .get(item.resourceType)
              ?.forEach((k, v) => {
                this.currentConfig.set(v, { type: k, val: objMap.get(v) });
              });
            break;
          }
          case ResourceType.EC2: {
            let res = item.resourceConfig as GCP_ComputeEngine;
            let objMap = new Map(Object.entries(res));
            ResourceProperties.propertiesMap
              .get(item.resourceType)
              ?.forEach((k, v) => {
                this.currentConfig.set(v, { type: k, val: objMap.get(v) });
              });
            break;
          }
          default: {
            ResourceProperties.propertiesMap
              .get(item.resourceType)
              ?.forEach((k, v) => {
                this.currentConfig.set(v, { type: k, val: '' });
              });
            break;
          }
        }
      } else {
        ResourceProperties.propertiesMap
          .get(item.resourceType)
          ?.forEach((k, v) => {
            this.currentConfig.set(v, { type: k, val: '' });
          });
      }
      this.currentResourceType = item.resourceType;
      this.currentIndex = i;
    } else {
      this.currentResourceType = undefined;
      this.currentIndex = -1;
      this.currentConfig = new Map<string, { type: InputType; val: string }>();
    }
    this.showSideBar = !this.showSideBar;
  }

  startConnection(event: MouseEvent, i: number): void {
    console.log(i);
    this.currentIndex = i;
    this.endButtonDisabled = false;
    const lineCanvas = this.lineCanvas?.nativeElement as HTMLCanvasElement;
    const canvasRect = lineCanvas.getBoundingClientRect();
    const canvasX = canvasRect.left;
    const canvasy = canvasRect.top;
    this._lineService.setStart(
      event.clientX - canvasX,
      event.clientY - canvasy
    );
    this.currentInlet = i;
  }

  endConnection(event: MouseEvent, i: number): void {
    this.currentIndex = i;
    this.endButtonDisabled = false;
    const lineCanvas = this.lineCanvas?.nativeElement as HTMLCanvasElement;
    const canvasRect = lineCanvas.getBoundingClientRect();
    const canvasX = canvasRect.left;
    const canvasy = canvasRect.top;
    this._lineService.setEnd(event.clientX - canvasX, event.clientY - canvasy);
    this._lineService.drawLine();
    this.updateLineState(i);
    this.saveState();
    //this._lineService.reset();
  }

  dragEnd($event: CdkDragEnd, id: number) {
    let pos = $event.source.getFreeDragPosition();
    let currentItem = this.items[id];
    // if (currentItem.resourceType == ResourceType.Virtual_Private_Cloud) {
    //   let x = pos.x - currentItem.position.x;
    //   let y = pos.y - currentItem.position.y;

    //   let index = 0;
    //   this.items.forEach((element) => {
    //     this.UpdateLine(element, index, pos);
    //     let nx = element.position.x + x;
    //     let ny = element.position.y + y;
    //     element.position = { x: nx, y: ny };
    //     index += 1;
    //   });
    // }

    this.UpdateLine(currentItem, id, pos);

    currentItem.position.x = pos.x;
    currentItem.position.y = pos.y;
    console.log(pos);
    this.saveState();
  }

  UpdateLine(currentItem: CloudResource, id: number, pos: any) {
    let translateX = pos.x - currentItem.position.x;
    let translateY = pos.y - currentItem.position.y;
    if (currentItem.inlets.length > 0) {
      currentItem.inlets.forEach((element) => {
        let inlet = currentItem.inletMap.get(element);
        currentItem.inletMap.set(element, {
          x: (inlet?.x as number) + translateX,
          y: (inlet?.y as number) + translateY,
          x2: inlet?.x2 as number,
          y2: inlet?.y2 as number,
        });
        let outlet = this.items[element].outletMap.get(id);
        this.items[element].outletMap.set(id, {
          x: outlet?.x as number,
          y: outlet?.y as number,
          x2: (inlet?.x as number) + translateX,
          y2: (inlet?.y as number) + translateY,
        });
      });
    }

    if (currentItem.outlets.length > 0) {
      currentItem.outlets.forEach((element) => {
        let outlet = currentItem.outletMap.get(element);
        currentItem.outletMap.set(element, {
          x: (outlet?.x as number) + translateX,
          y: (outlet?.y as number) + translateY,
          x2: outlet?.x2 as number,
          y2: outlet?.y2 as number,
        });
        let inlet = this.items[element].inletMap.get(id);
        this.items[element].inletMap.set(id, {
          x: inlet?.x as number,
          y: inlet?.y as number,
          x2: (inlet?.x as number) + translateX,
          y2: (inlet?.y as number) + translateY,
        });
      });
    }

    if (currentItem.inlets.length > 0 || currentItem.outlets.length > 0) {
      this.redrawCanvas();
    }
  }

  onResize(ev: ResizeObserverEntry, id: number) {
    this.renderer.setStyle(ev.target, 'width', ev.contentRect.width);
    this.renderer.setStyle(ev.target, 'height', ev.contentRect.height);
    this.items[id].shape.width = ev.contentRect.width;
    this.items[id].shape.height = ev.contentRect.height;
    this.saveState();
  }

  updateConfig(id: number, res: Resource) {
    this.items[id].resourceConfig = res;
    this.saveState();
  }

  updateLineState(id: number) {
    let outLetItem = this.items[this.currentInlet];
    let inLetItem = this.items[id];
    outLetItem.outlets.push(id);
    inLetItem.inlets.push(this.currentInlet);
    let coordinates = this._lineService.getCoordinates();
    outLetItem.outletMap.set(id, {
      x: coordinates.startx,
      y: coordinates.starty,
      x2: coordinates.endx,
      y2: coordinates.endy,
    });
    inLetItem.inletMap.set(this.currentInlet, {
      x: coordinates.endx,
      y: coordinates.endy,
      x2: coordinates.startx,
      y2: coordinates.starty,
    });
    console.log(this.items);
  }

  redrawCanvas() {
    this._lineService.clearLine();
    this.items.forEach((item) => {
      if (item.outlets.length > 0) {
        item.outlets.forEach((outlet) => {
          this._lineService.setStart(
            item.outletMap.get(outlet)?.x as number,
            item.outletMap.get(outlet)?.y as number
          );
          this._lineService.setEnd(
            item.outletMap.get(outlet)?.x2 as number,
            item.outletMap.get(outlet)?.y2 as number
          );
          this._lineService.drawLine();
        });
      }
    });
  }
}
