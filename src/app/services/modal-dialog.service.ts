import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Injectable, Injector } from '@angular/core';
import { ConfigModalComponent } from '../components/config-modal/config-modal.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { ResourceType } from '../enum/ResourceType';
import { Resource, outputs } from '../Models/CloudResource';
import { InputType } from '../enum/InputType';
import { PlaygroundComponent } from '../components/playground/playground.component';

@Injectable({
  providedIn: 'root',
})
export class ModalDialogService {
  constructor(private _overlay: Overlay, private _injector: Injector) { }
  public ActiveModal: any;
  public openConfigModal() {
    let positionStrategy = this._overlay.position().global();
    positionStrategy = positionStrategy.centerHorizontally();
    positionStrategy = positionStrategy.centerVertically();

    const overlayRef = this._overlay.create(
      new OverlayConfig({
        positionStrategy,
        hasBackdrop: true,
        disposeOnNavigation: true,
      })
    );
    this.ActiveModal = overlayRef;
    const userProfilePortal = new ComponentPortal(ConfigModalComponent);
    overlayRef.attach(userProfilePortal);
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
  }

  public openComponentModal(
    currentIndex: number,
    currentResource: ResourceType,
    config: Map<string, { type: InputType, val: string }>,
    currentOutput: outputs[],
    comp: PlaygroundComponent) {
    let positionStrategy = this._overlay.position().global();
    positionStrategy = positionStrategy.centerHorizontally();
    positionStrategy = positionStrategy.centerVertically();

    const overlayRef = this._overlay.create(
      new OverlayConfig({
        positionStrategy,
        hasBackdrop: true,
        disposeOnNavigation: true,
      })
    );
    this.ActiveModal = overlayRef;
    const userProfilePortal = new ComponentPortal(SideBarComponent);

    let cmpRef = overlayRef.attach(userProfilePortal);

    cmpRef.instance.currentResource = currentResource;
    cmpRef.instance.currentIndex = currentIndex;
    cmpRef.instance.config = config;
    cmpRef.instance.currentOutput = currentOutput;
    cmpRef.instance.configUpdateEvent.subscribe((res) => {
      comp.updateConfig(res.id, res.res);
    });

    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
  }
}
