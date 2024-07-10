import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent {
  view = false;

  @HostListener('document:keydown.shift.p', ['$event'])
  onKeydown(event: Event) {
    console.log('pressed');
    this.view = !this.view;
  }

  @Output()
  public deployClicked = new EventEmitter();
  @Output()
  public destroyClicked = new EventEmitter();

  public deploy(): void {
    this.deployClicked.emit();
  }

  public destroy(): void {
    this.destroyClicked.emit();
  }
}
