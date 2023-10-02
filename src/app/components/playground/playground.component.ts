import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { CdkDragDrop, CdkDragEnd, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
import { faTrash, faGear } from '@fortawesome/free-solid-svg-icons';
import { CloudResource, DefaultResource, Resource } from 'src/app/Models/CloudResource';
import { GCP_ComputeEngine, GCP_StorageBucket, ResourceProperties } from 'src/app/Models/ResourceProperties';
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
  currentIndex = 0
  firstX = 0
  firstY = 0
  faTrash = faTrash;
  faGear = faGear;
  currentConfig = new Map<string, { type: InputType, val: any }>();
  currentResourceType: ResourceType | undefined;

  constructor(
    private host: ElementRef,
    private http: HttpClient,
    private _addComponentService: AddComponentService,
    private _lineService: DrawLineService,
    private renderer: Renderer2) { }
  public items: CloudResource[] = []
  resourceType = ResourceType
  a = "sd"

  onEnter(value: string, id: number) {
    this.items[id].title = value;
    this.saveState();
  }

  deploy() {
    this.http
      .post("http://localhost:8080/deploy", JSON.stringify(this.items), { "responseType": "text" })
      .subscribe((res) => this.processResponse(res));
  }

  destroy() {
    this.http
      .get("http://localhost:8080/stack")
      .subscribe((res) => console.log(res));
  }

  getState() {
    this.http
      .get("http://localhost:8080/state")
      .subscribe({
        next: (res) => this.items = JSON.parse(JSON.stringify(res)),
        error: (_) => {
          let data = localStorage.getItem("data");
          if (data != null) {
            this.items = JSON.parse(data);
          }
        },
        complete: () => console.info("GetState completed")
      });
  }

  saveState() {
    this.http
      .post("http://localhost:8080/state", JSON.stringify(this.items), { "responseType": "text" })
      .subscribe({
        next: (data) => this.processResponse(data),
        error: (_) => {
          localStorage.setItem("data", JSON.stringify(this.items))
        },
        complete: () => console.info("SaveState Completed")
      });


  }

  processResponse(val: string) {
    var data = JSON.parse(val);
    console.log(data["message"]);
  }

  ngOnInit(): void {
    this.getState();
    this._addComponentService.components.subscribe((componentName: ResourceType) => {
      const item = new CloudResource();
      item.resourceType = componentName;
      item.name = ResourceType[componentName];
      item.title = item.name.toString();
      item.providerType = ProviderType.GCP;
      item.resourceConfig = undefined;
      this.items.push(item);
      this.saveState();
    })

    this._lineService.initialize(this.lineCanvas?.nativeElement as HTMLCanvasElement);

    const observer = new ResizeObserver(entries => {
      console.log(entries);
    });

    const container = document.getElementById('Card');
    if (container != null) {
      observer.observe(container);
    }
  }

  ngAfterViewInit() {
    if (this.lineCanvas) {
      const parentWidth = this.lineCanvas?.nativeElement.parentElement.clientWidth;
      const parentHeight = this.lineCanvas?.nativeElement.parentElement.clientHeight;
      this.lineCanvas.nativeElement.width = parentWidth;
      this.lineCanvas.nativeElement.height = parentHeight;
    }
  }

  trashShit(i: number): void {
    console.log(i)
    this.items.splice(i, 1);
    this.saveState();
  }

  toggleSidebar(i: number, item: CloudResource): void {
    if (!this.showSideBar) {
      if (item.resourceConfig != undefined) {
        switch (item.resourceType) {
          case ResourceType.Simple_Storage_Service:
            {
              let res = item.resourceConfig as GCP_StorageBucket;
              let objMap = new Map(Object.entries(res));
              ResourceProperties.propertiesMap.get(item.resourceType)?.forEach((k, v) => {
                this.currentConfig.set(v, { type: k, val: objMap.get(v) })
              });
              break;
            }
          case ResourceType.EC2:
            {
              let res = item.resourceConfig as GCP_ComputeEngine;
              let objMap = new Map(Object.entries(res));
              ResourceProperties.propertiesMap.get(item.resourceType)?.forEach((k, v) => {
                this.currentConfig.set(v, { type: k, val: objMap.get(v) })
              });
              break;
            }
          default:
            {
              ResourceProperties.propertiesMap.get(item.resourceType)?.forEach((k, v) => {
                this.currentConfig.set(v, { type: k, val: "" })
              });
              break;
            }
        }
      }
      else {
        ResourceProperties.propertiesMap.get(item.resourceType)?.forEach((k, v) => {
          this.currentConfig.set(v, { type: k, val: "" })
        });
      }
      this.currentResourceType = item.resourceType;
      this.currentIndex = i;
    }
    else {
      this.currentResourceType = undefined;
      this.currentIndex = -1;
      this.currentConfig = new Map<string, { type: InputType, val: string }>();
    }
    this.showSideBar = !this.showSideBar;
  }

  startConnection(event: MouseEvent, i: number): void {
    console.log(i)
    this.currentIndex = i
    this.endButtonDisabled = false
    const lineCanvas = this.lineCanvas?.nativeElement as HTMLCanvasElement
    const canvasRect = lineCanvas.getBoundingClientRect();
    const canvasX = canvasRect.left
    this.firstX = event.clientX - canvasX
    this.firstY = event.clientY;
  }

  endConnection(event: MouseEvent, i: number): void {
    this.currentIndex = i
    this.endButtonDisabled = false
    const lineCanvas = this.lineCanvas?.nativeElement as HTMLCanvasElement
    const canvasRect = lineCanvas.getBoundingClientRect();
    const canvasX = canvasRect.left
    this._lineService.drawLine(
      this.firstX,
      this.firstY,
      event.clientX - canvasX,
      event.clientY
    );
  }

  dragEnd($event: CdkDragEnd, id: number) {
    let pos = $event.source.getFreeDragPosition()
    if (this.items[id].resourceType == ResourceType.Virtual_Private_Cloud) {
      let x = pos.x - this.items[id].position.x;
      let y = pos.y - this.items[id].position.y;

      this.items.forEach(element => {
        let nx = element.position.x + x;
        let ny = element.position.y + y;
        element.position = { x: nx, y: ny };
      });
    }

    this.items[id].position.x = pos.x;
    this.items[id].position.y = pos.y;
    console.log(pos);
    this.saveState();

    const observer = new ResizeObserver(entries => {
      console.log(entries);
    });

    observer.observe(this.host.nativeElement);
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
}
