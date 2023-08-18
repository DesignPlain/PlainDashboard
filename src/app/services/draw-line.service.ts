import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawLineService {

  private lineCanvas: HTMLCanvasElement | undefined;
  private lineColor: string = 'white'; // Default line color
  private lineWidth: number = 1;

  initialize(canvas: HTMLCanvasElement) {
    this.lineCanvas = canvas;
  }

  drawLine(x1: number, y1: number, x2: number, y2: number) {
    if (this.lineCanvas) {
      const context = this.lineCanvas.getContext('2d');
      if(context == null){
        return;
      }
      context.clearRect(0, 0, this.lineCanvas.width, this.lineCanvas.height);
      context.strokeStyle = this.lineColor; // Set line color
      context.lineWidth = this.lineWidth;   // Set line width
      context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke()
    }
  }
}
