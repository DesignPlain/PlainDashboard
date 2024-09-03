import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';
import {
  faCirclePlay,
  faStopCircle,
  faTrash,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent {
  public faPlay: IconDefinition = faCirclePlay;
  public faStop: IconDefinition = faStopCircle;
  constructor(private el: ElementRef) {}
  view = false;

  @HostListener('document:keydown.meta.shift.p', ['$event'])
  onKeydown(event: Event) {
    console.log('pressed');
    this.view = !this.view;
  }

  @HostListener('document:click', ['$event'])
  onKeydownc(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.view = false;
    }
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
