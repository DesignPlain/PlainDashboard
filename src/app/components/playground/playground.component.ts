import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { CdkDragDrop, CdkDragEnd, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
import { faTrash, faGear } from '@fortawesome/free-solid-svg-icons';
import { CloudResource } from 'src/app/Models/CloudResource';
import { ResourceProperties } from 'src/app/Models/ResourceProperties';
import { InputType } from 'src/app/enum/InputType';
import { ResourceType } from 'src/app/enum/ResourceType';
import { AddComponentService } from 'src/app/services/add-component.service';
import { DrawLineService } from 'src/app/services/draw-line.service';
import { ResizeObserverDirective } from '../../resize-observer.directive';

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
  currentConfig = new Map<string, InputType>();

  constructor(
    private host: ElementRef,
    private _addComponentService: AddComponentService,
    private _lineService: DrawLineService,
    private renderer: Renderer2) { }
  public items: CloudResource[] = []
  resourceType = ResourceType
  a = "sd"

  onEnter(value: string, id: number) { 
    this.items[id].title = value;
    this.updateData();
  }

  ngOnInit(): void {
    let data = localStorage.getItem("data");

    if (data != null) {
      this.items = JSON.parse(data);
    }

    this._addComponentService.components.subscribe((componentName: ResourceType) => {
      const item = new CloudResource();
      item.resourceType = componentName;
      item.name = ResourceType[componentName]
      item.configuration = ResourceProperties.propertiesMap.get(componentName) as Map<string, InputType>;
      this.items.push(item)

      this.updateData();
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
    this.updateData();
  }

  toggleSidebar(i: number, item: CloudResource): void {
    this.currentConfig = item.configuration;
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
    this.items[id].position.x = pos.x;
    this.items[id].position.y = pos.y;
    console.log(pos);
    this.updateData();

    const observer = new ResizeObserver(entries => {
      console.log(entries);
    });

    observer.observe(this.host.nativeElement);
  }

  updateData() {
    localStorage.setItem("data", JSON.stringify(this.items));
  }

  onResize(ev: ResizeObserverEntry, id: number) {
    this.renderer.setStyle(ev.target, 'width', ev.contentRect.width);
    this.renderer.setStyle(ev.target, 'height', ev.contentRect.height);
    this.items[id].width = ev.contentRect.width;
    this.items[id].height = ev.contentRect.height;
    this.updateData();
  }
}
