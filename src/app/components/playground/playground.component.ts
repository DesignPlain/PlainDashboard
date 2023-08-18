import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faTractor } from '@fortawesome/free-solid-svg-icons';
import { AddComponentService } from 'src/app/services/add-component.service';
import { DrawLineService } from 'src/app/services/draw-line.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent implements OnInit{
  @ViewChild('lineCanvas', { static: true }) lineCanvas: ElementRef | undefined;
  endButtonDisabled = true;
  currentIndex = 0
  firstX = 0
  firstY=0
  faTrash = faTractor;
  constructor(private _addComponentService: AddComponentService, private _lineService: DrawLineService) {}
  public items:string[] = ["Lambda"]
  ngOnInit(): void {
    this._addComponentService.components.subscribe((componentName: string) => {
      this.items.push(componentName)
    })
    this._lineService.initialize(this.lineCanvas?.nativeElement as HTMLCanvasElement);
  }

  trashShit(i: number): void {
    console.log(i)
    this.items.splice(i, 1);
  }

  startConnection(event:MouseEvent, i: number): void {
    console.log(i)
    this.currentIndex = i
    this.endButtonDisabled = false
    const lineCanvas = this.lineCanvas?.nativeElement as HTMLCanvasElement
    const canvasRect = lineCanvas.getBoundingClientRect();
    const canvasX = canvasRect.left
    this.firstX = event.clientX - canvasX
    this.firstY = event.clientY;
  }

  endConnection(event:MouseEvent, i: number): void {
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

  ngAfterViewInit() {
    if(this.lineCanvas){
      const parentWidth = this.lineCanvas?.nativeElement.parentElement.clientWidth;
      const parentHeight = this.lineCanvas?.nativeElement.parentElement.clientHeight;
      this.lineCanvas.nativeElement.width = parentWidth;
      this.lineCanvas.nativeElement.height = parentHeight;
    }
  }
}
