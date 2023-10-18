import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {
  @Output()
  public deployClicked = new EventEmitter();
  @Output()
  public destroyClicked = new EventEmitter();

  public deploy(): void {
    this.deployClicked.emit()
  }

  public destroy(): void {
    this.destroyClicked.emit()
  }
}
