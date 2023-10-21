import { Injectable } from '@angular/core';
import { LineOptions } from '../components/line/line.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawLineService {
  public newLine: Subject<LineOptions> = new Subject<LineOptions>();
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
