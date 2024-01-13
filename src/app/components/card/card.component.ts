import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CloudResource } from 'src/app/Models/CloudResource';
import {
  faTrash,
  faGear,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { ResourceType } from 'src/app/enum/ResourceType';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';
import { OverlayConfig } from '@angular/cdk/overlay';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(private _modalService: ModalDialogService) { }

  @Input()
  public item: CloudResource;

  @Output()
  public trashShitClicked = new EventEmitter();
  @Output()
  public toggleSidebarClicked = new EventEmitter();
  @Output()
  public startConnectionClicked = new EventEmitter<{
    outputPositionX: number;
    outputPositionY: number;
  }>();
  @Output()
  public dragEnded = new EventEmitter<CdkDragEnd>();
  @Output()
  public resized = new EventEmitter<ResizeObserverEntry>();
  @Output()
  public onValueEntered = new EventEmitter<string>();
  @Output()
  public mouseEntered = new EventEmitter<{
    inputPositionX: number;
    inputPositionY: number;
  }>();
  @Output()
  public mouseLeft = new EventEmitter();

  public resourceType = ResourceType;
  // Initializing font awesome icons
  public faTrash: IconDefinition = faTrash;
  public faGear: IconDefinition = faGear;

  public handleMouseDown(event: any, ref: HTMLElement): void {
    event.stopPropagation();
    const centerX =
      ref.getBoundingClientRect().left +
      Math.abs(
        ref.getBoundingClientRect().right - ref.getBoundingClientRect().left
      ) /
      2;
    const centerY =
      ref.getBoundingClientRect().top +
      Math.abs(
        ref.getBoundingClientRect().bottom - ref.getBoundingClientRect().top
      ) /
      2;
    this.startConnectionClicked.emit({
      outputPositionX: centerX,
      outputPositionY: centerY,
    });
  }

  public handleMouseEnter(event: any, ref: HTMLElement) {
    event.stopPropagation();

    const centerX =
      ref.getBoundingClientRect().left +
      Math.abs(
        ref.getBoundingClientRect().right - ref.getBoundingClientRect().left
      ) /
      2;
    const centerY =
      ref.getBoundingClientRect().top +
      Math.abs(
        ref.getBoundingClientRect().bottom - ref.getBoundingClientRect().top
      ) /
      2;
    this.mouseEntered.emit({
      inputPositionX: centerX,
      inputPositionY: centerY,
    });
  }

  public handleMouseLeave() {
    this.mouseLeft.emit();
  }

  public trashShit(): void {
    this.trashShitClicked.emit();
  }

  public toggleSidebar(): void {
    this.toggleSidebarClicked.emit();
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

  public modalConfig: OverlayConfig;

  public openConfigPopup() {
    this.toggleSidebarClicked.emit();
  }
}
