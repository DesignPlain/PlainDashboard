import { Component, Input } from '@angular/core';

export interface LineOptions {
  selected: boolean;
  isNew: boolean;
  position: {x1: number, y1: number, x2: number, y2: number};
}

@Component({
  selector: 'line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent {
@Input()
public LineOptions: LineOptions;
public x1: number;
public y1: number;
public x2: number;
public y2: number;
public path: string;

ngOnInit(): void {
  this.x1 = this.LineOptions.position.x1;
  this.y1 = this.LineOptions.position.y1;
  this.x2 = this.LineOptions.position.x2;
  this.y2 = this.LineOptions.position.y2;
  this.path = `M${this.x1} ${this.y1} C ${this.x1 + Math.abs(this.x2 - this.x1)} ${this.y1}, ${this.x2 - Math.abs(this.x2 - this.x1)} ${this.y2}, ${this.x2} ${this.y2}`
}
}
