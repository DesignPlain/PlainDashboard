import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DrawLineService {
  private lineCanvas: HTMLCanvasElement | undefined;
  private lineColor: string = '#000000'; // Default line color
  private lineWidth: number = 2;
  private startx: number = 0;
  private starty: number = 0;
  private endx: number = 0;
  private endy: number = 0;
  private startSaved: boolean = false;
  private endSaved: boolean = false;

  initialize(canvas: HTMLCanvasElement) {
    this.lineCanvas = canvas;
  }

  setStart(x: number, y: number) {
    this.startx = x;
    this.starty = y;
    this.startSaved = true;
  }

  setEnd(x: number, y: number) {
    this.endx = x;
    this.endy = y;
    this.endSaved = true;
  }

  getCoordinates() {
    return {
      startx: this.startx,
      starty: this.starty,
      endx: this.endx,
      endy: this.endy,
    };
  }

  drawLine() {
    if (this.lineCanvas) {
      const context = this.lineCanvas.getContext('2d');
      if (context == null) {
        return;
      }

      if (!this.startSaved || !this.endSaved) {
        alert('Please set start and end point');
        return;
      }
      context.strokeStyle = this.lineColor; // Set line color
      context.lineWidth = this.lineWidth; // Set line width
      context.setLineDash([15, 3]);
      context.beginPath();
      context.moveTo(this.startx, this.starty);
      context.lineTo(this.endx, this.endy);
      context.stroke();
    }
  }

  reset() {
    this.startx = 0;
    this.starty = 0;
    this.endx = 0;
    this.endy = 0;
    this.startSaved = false;
    this.endSaved = false;
  }

  clearLine() {
    if (this.lineCanvas) {
      const context = this.lineCanvas.getContext('2d');
      if (context == null) {
        return;
      }

      context.clearRect(0, 0, this.lineCanvas.width, this.lineCanvas.height);
    }
  }
}
