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

    const overlayRef = this._overlay.create(new OverlayConfig({
      positionStrategy,
      hasBackdrop: true,
      disposeOnNavigation: true,

    }));
    this.ActiveModal = overlayRef;
    const userProfilePortal = new ComponentPortal(ConfigModalComponent);
    overlayRef.attach(userProfilePortal);
  }

//   private _getOverlayConfig(modalOptions: ModalOptions): OverlayConfig {
//     let positionStrategy = this._overlay.position().global();

//     if (modalOptions.horizontal) {
//         positionStrategy = positionStrategy.centerHorizontally();
//     }

//     if (modalOptions.vertical) {
//         positionStrategy = positionStrategy.centerVertically();
//     }

//     if (modalOptions.bottom) {
//         positionStrategy.bottom();
//     }

//     return new OverlayConfig({
//       height: modalOptions.height,
//       width: modalOptions.width,
//         positionStrategy,
//         scrollStrategy: this._overlay.scrollStrategies.block(),
//         hasBackdrop: true,
//         backdropClass: modalOptions.background ? 'cdk-overlay-dark-backdrop' : 'transparent',
//         panelClass: modalOptions.panelClass,
//         disposeOnNavigation: modalOptions.disposeOnNavigation,
//     });
// }
}
