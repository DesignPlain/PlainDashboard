import { Component, Input } from '@angular/core';
import { IconDefinition, faClose } from '@fortawesome/free-solid-svg-icons';
import { take } from 'rxjs';
import { ProviderType } from 'src/app/enum/ProviderType';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';
import { StackService } from 'src/app/services/stack.service';

@Component({
  selector: 'app-config-modal',
  templateUrl: './config-modal.component.html',
  styleUrls: ['./config-modal.component.scss'],
})
export class ConfigModalComponent {
  constructor(
    private _modalDialogService: ModalDialogService,
    private _stackService: StackService
  ) {
    this.get();
  }
  public faClose: IconDefinition = faClose;

  public closeModal() {
    this._modalDialogService.ActiveModal.dispose();
  }

  file: File;
  @Input() public projectName: string;

  @Input() public aws_KeyId: string;
  @Input() public aws_Secretkey: string;

  @Input() public toggleCred: boolean = false;
  fileName: string = '';
  provType = ProviderType;
  @Input() public toggleProvider = 0;

  onFilechange(event: any) {
    console.log(event.target.files[0]);
    this.file = event.target.files[0];

    this.fileName = this.file.name;
  }

  toggleMenu() {
    this.toggleCred = !this.toggleCred;
    if (!this.toggleCred) {
      this.toggleProvider = 0;
    } else {
      this.toggleProvider = ProviderType.GCP;
    }
  }

  upload() {
    this._stackService
      .uploadProjectConfig(
        this.file,
        this.projectName,
        this.aws_KeyId,
        this.aws_Secretkey
      )
      .subscribe((resp) => {
        alert('Uploaded');
      });
  }

  get() {
    this._stackService
      .getProjectConfig()
      .pipe(take(1))
      .subscribe((resp) => {
        let res = JSON.parse(JSON.stringify(resp));

        this.aws_KeyId = res['AWS_AccessKeyId'];
        this.aws_Secretkey = res['AWS_SecretAccessKey'];
        this.fileName = res['GCP_APIKeyFileName'];
        this.projectName = res['GCP_ProjectName'];

        console.log(res);
      });
  }
}
