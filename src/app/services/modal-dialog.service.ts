import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Injectable, Injector } from '@angular/core';
import { ConfigModalComponent } from '../components/config-modal/config-modal.component';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class ModalDialogService {
  constructor(private _overlay: Overlay, private _injector: Injector) {}
  public ActiveModal: any;
  public openModal() {
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
}
