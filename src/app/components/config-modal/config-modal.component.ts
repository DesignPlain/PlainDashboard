import { Component, Input } from '@angular/core';
import { IconDefinition, faClose } from '@fortawesome/free-solid-svg-icons';
import { ProviderType } from "src/app/enum/ProviderType";
import { ModalDialogService } from 'src/app/services/modal-dialog.service';
import { StackService } from 'src/app/services/stack.service';

@Component({
  selector: 'app-config-modal',
  templateUrl: './config-modal.component.html',
  styleUrls: ['./config-modal.component.scss']
})

export class ConfigModalComponent {
  constructor(
    private _modalDialogService: ModalDialogService,
    private _stackService: StackService) {
  }
  public faClose: IconDefinition = faClose;

  public closeModal() {
    this._modalDialogService.ActiveModal.dispose();
  }

  file: File;
  @Input() public projectName: string;
  @Input() public toggleCred: boolean = false;

  provType = ProviderType
  @Input() public toggleProvider = 0;



  onFilechange(event: any) {
    //console.log(event.target.files[0])
    this.file = event.target.files[0]
  }

  toggleMenu() {
    this.toggleCred = !this.toggleCred;
    if (!this.toggleCred) {
      this.toggleProvider = 0;
    }
    else {
      this.toggleProvider = ProviderType.GCP;
    }
  }

  upload() {
    if (this.file && this.projectName != "") {
      this._stackService.uploadfile(this.file, this.projectName)
        .subscribe(resp => {
          alert("Uploaded")
        })
    } else {
      alert("Please select a file first")
    }
  }
}
