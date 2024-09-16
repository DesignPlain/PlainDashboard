import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { Injectable, Injector } from '@angular/core';
import { ConfigModalComponent } from '../components/config-options/config-modal/config-modal.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { ResourceConfigComponent } from '../components/resource-config/resource-config.component';
import { DynamicUIPropState } from '../components/resource-config/DynamicUIPropState';
import { Outputs } from '../Models/CloudResource';
import { PlaygroundComponent } from '../components/playground/playground.component';
import { ResourceType as GCP_ResourceType } from 'src/app/Models/codegen/gcp/ResourceType';
import { ResourceType as AWS_ResourceType } from 'src/app/Models/codegen/aws/ResourceType';
import { TemplateConfigComponent } from '../components/template-config/template-config.component';
import { HelpModalComponent } from '../components/help-modal/help-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalDialogService {
  constructor(
    private _overlay: Overlay,
    private _injector: Injector,
  ) {}
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
      }),
    );
    this.ActiveModal = overlayRef;
    const configModalComponent = new ComponentPortal(ConfigModalComponent);
    overlayRef.attach(configModalComponent);
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
  }

  public openTemplateConfigModal(details: string) {
    let positionStrategy = this._overlay.position().global();
    positionStrategy = positionStrategy.centerHorizontally();
    positionStrategy = positionStrategy.centerVertically();

    const overlayRef = this._overlay.create(
      new OverlayConfig({
        positionStrategy,
        hasBackdrop: true,
        disposeOnNavigation: true,
      }),
    );
    this.ActiveModal = overlayRef;
    const configModalComponent = new ComponentPortal(TemplateConfigComponent);
    let cmpRef = overlayRef.attach(configModalComponent);

    cmpRef.instance.t_details = details;
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
  }

  public openHelpModal() {
    let positionStrategy = this._overlay.position().global();
    positionStrategy = positionStrategy.centerHorizontally();
    positionStrategy = positionStrategy.centerVertically();

    const overlayRef = this._overlay.create(
      new OverlayConfig({
        positionStrategy,
        hasBackdrop: true,
        disposeOnNavigation: true,
      }),
    );
    this.ActiveModal = overlayRef;
    const configModalComponent = new ComponentPortal(HelpModalComponent);
    let cmpRef = overlayRef.attach(configModalComponent);
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
  }

  public openComponentModal(
    currentIndex: number,
    currentResource: GCP_ResourceType | AWS_ResourceType | undefined,
    config: Map<string, DynamicUIPropState>,
    currentOutput: Outputs[],
    lastError: string,
    yamlContent: string,
    resId: string,
    desc: string,
    comp: PlaygroundComponent,
  ) {
    let positionStrategy = this._overlay.position().global();
    positionStrategy = positionStrategy.centerHorizontally();
    positionStrategy = positionStrategy.centerVertically();

    const overlayRef = this._overlay.create(
      new OverlayConfig({
        positionStrategy,
        hasBackdrop: true,
        disposeOnNavigation: true,
      }),
    );
    this.ActiveModal = overlayRef;
    const resourceConfigComponent = new ComponentPortal(
      ResourceConfigComponent,
    );

    let cmpRef = overlayRef.attach(resourceConfigComponent);

    cmpRef.instance.currentResource = currentResource;
    cmpRef.instance.currentIndex = currentIndex;
    cmpRef.instance.config = config;
    cmpRef.instance.currentOutput = currentOutput;
    cmpRef.instance.lastError = lastError;
    cmpRef.instance.yamlData = yamlContent;
    cmpRef.instance.resId = resId;
    cmpRef.instance.description = desc;

    cmpRef.instance.configUpdateEvent.subscribe((res) => {
      comp.updateConfig(res.id, res.res);
    });

    cmpRef.instance.subConfigOpen.subscribe((res) => {
      comp.SetResourceConfig(res.id, comp.items[comp.items.length - 1]);
    });

    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
  }
}
