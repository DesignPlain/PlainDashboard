import { Component } from '@angular/core';
import { IconDefinition, faClose } from '@fortawesome/free-solid-svg-icons';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';

@Component({
  selector: 'app-config-modal',
  templateUrl: './config-modal.component.html',
  styleUrls: ['./config-modal.component.scss']
})
export class ConfigModalComponent {
  constructor(private _modalDialogService: ModalDialogService) {
  }
public faClose: IconDefinition = faClose;

public closeModal() {
this._modalDialogService.ActiveModal.dispose();
}

}
