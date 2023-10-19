import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CloudResource } from 'src/app/Models/CloudResource';
import {
  faTrash,
  faGear,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { ResourceType } from 'src/app/enum/ResourceType';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  public item: CloudResource;

  @Output()
  public trashShitClicked = new EventEmitter();
  @Output()
  public toggleSidebarClicked = new EventEmitter();
  @Output()
  public startConnectionClicked = new EventEmitter<MouseEvent>();
  @Output()
  public endConnectionClicked = new EventEmitter<MouseEvent>();
  @Output()
  public dragEnded = new EventEmitter<CdkDragEnd>();
  @Output()
  public resized = new EventEmitter<ResizeObserverEntry>();
  @Output()
  public onValueEntered = new EventEmitter<string>();

  public resourceType = ResourceType;
  // Initializing font awesome icons
  public faTrash: IconDefinition = faTrash;
  public faGear: IconDefinition = faGear;

  public trashShit(): void {
    this.trashShitClicked.emit();
  }

  public toggleSidebar(): void {
    this.toggleSidebarClicked.emit();
  }

  public startConnection(event: MouseEvent): void {
    this.startConnectionClicked.emit(event);
  }

  public endConnection(event: MouseEvent): void {
    this.endConnectionClicked.emit(event);
  }

  public dragEnd($event: CdkDragEnd): void {
    this.dragEnded.emit($event);
  }

  public onResize(ev: ResizeObserverEntry): void {
    this.resized.emit(ev);
  }

  public onEnter(value: string): void {
    this.onValueEntered.emit(value);
  }
}
