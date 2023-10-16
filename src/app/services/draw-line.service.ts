import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DrawLineService {
  private startx: number = 0;
  private starty: number = 0;
  private endx: number = 0;
  private endy: number = 0;
  private startSaved: boolean = false;
  private endSaved: boolean = false;

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
}
