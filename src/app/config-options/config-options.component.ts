import { Component, OnInit } from '@angular/core';
import { IconDefinition, faGear } from '@fortawesome/free-solid-svg-icons';
import { ModalDialogService } from '../services/modal-dialog.service';
import { CloseScrollStrategy, GlobalPositionStrategy, OverlayConfig, ScrollStrategyOptions } from '@angular/cdk/overlay';

@Component({
  selector: 'app-config-options',
  templateUrl: './config-options.component.html',
  styleUrls: ['./config-options.component.scss']
})
export class ConfigOptionsComponent implements OnInit {

  constructor(private _modalService: ModalDialogService) { }

  ngOnInit(): void {
  }

  public faGear: IconDefinition = faGear;
  public modalConfig: OverlayConfig;

  public openConfigPopup() {
    this._modalService.openConfigModal();
  }
}
