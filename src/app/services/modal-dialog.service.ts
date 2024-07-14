import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Injectable, Injector } from '@angular/core';
import { ConfigModalComponent } from '../components/config-modal/config-modal.component';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ResourceConfigComponent,
} from '../components/resource-config/resource-config.component';
import { DynamicUIProps } from '../components/resource-config/DynamicUIProps';
import { DynamicUIPropState } from '../components/resource-config/DynamicUIPropState';
import { Outputs } from '../Models/CloudResource';
import { PlaygroundComponent } from '../components/playground/playground.component';
import { GCP_ResourceType } from 'src/app/Models/Codegen/gcp_resources/ResourceType';
import { AWS_ResourceType } from '../Models/Codegen/aws_resources/ResourceType';

@Injectable({
  providedIn: 'root',
})
export class ModalDialogService {
  constructor(private _overlay: Overlay, private _injector: Injector) {}
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
    currentResource: GCP_ResourceType | AWS_ResourceType | undefined,
    config: Map<string, DynamicUIPropState>,
    currentOutput: Outputs[],
    comp: PlaygroundComponent
  ) {
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
    const userProfilePortal = new ComponentPortal(ResourceConfigComponent);

    let cmpRef = overlayRef.attach(userProfilePortal);

    cmpRef.instance.currentResource = currentResource;
    cmpRef.instance.currentIndex = currentIndex;
    cmpRef.instance.config = config;
    cmpRef.instance.currentOutput = currentOutput;

    cmpRef.instance.configUpdateEvent.subscribe((res) => {
      comp.updateConfig(res.id, res.res);
    });

    cmpRef.instance.subConfigOpen.subscribe((res) => {
      comp.SetResourceConfig(res.id, comp.items[comp.items.length - 1]);
    });

    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
  }
}
