import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

export interface LineOptions {
  selected: boolean;
  isNew: boolean;
  position: { x1: number, y1: number, x2: number, y2: number };
}

@Component({
  selector: 'line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent {
  @Input()
  public LineOptions: LineOptions;
  @Input()
  public edgeObserver: Subject<LineOptions> = new Subject<LineOptions>();
  public x1: number;
  public y1: number;
  public x2: number;
  public y2: number;
  public path: string;
  public isNew: boolean;
  public selected: boolean;
  public lineReady: boolean = false;

  // Adjust to change the curvature behavior
  private readonly curveAdjuster = 0.6;

  ngOnInit(): void {
    this.edgeObserver.subscribe((value) => {
      this.isNew = value.isNew;
      this.selected = value.selected;
      this.x1 = value.position.x1;
      this.y1 = value.position.y1;
      this.x2 = value.position.x2;
      this.y2 = value.position.y2;
      this.path = `M${this.x1} ${this.y1} C ${this.x1 + Math.abs(this.x2 - this.x1) * this.curveAdjuster} ${this.y1}, ${this.x2 - Math.abs(this.x2 - this.x1) * this.curveAdjuster} ${this.y2}, ${this.x2} ${this.y2}`;
      this.lineReady = true;
    })
    if (this.LineOptions) {
      this.isNew = this.LineOptions.isNew;
      this.selected = this.LineOptions.selected;
      this.x1 = this.LineOptions.position.x1;
      this.y1 = this.LineOptions.position.y1;
      this.x2 = this.LineOptions.position.x2;
      this.y2 = this.LineOptions.position.y2;
      // this.path = `M${this.x1} ${this.y1} C ${this.x1 + Math.abs(this.x2 - this.x1)} ${this.y1}, ${this.x2 - Math.abs(this.x2 - this.x1)} ${this.y2}, ${this.x2} ${this.y2}`
      this.path = `M${this.x1} ${this.y1} C ${this.x1 + Math.abs(this.x2 - this.x1) * this.curveAdjuster} ${this.y1}, ${this.x2 - Math.abs(this.x2 - this.x1) * this.curveAdjuster} ${this.y2}, ${this.x2} ${this.y2}`;

      this.lineReady = true;
    }
  }
}
