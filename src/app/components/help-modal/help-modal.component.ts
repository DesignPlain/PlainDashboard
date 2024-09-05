import { Component, Input } from '@angular/core';
import { IconDefinition, faClose } from '@fortawesome/free-solid-svg-icons';
import { take } from 'rxjs';
import { ProviderType } from 'src/app/enum/ProviderType';
import { ApplicationStateService } from 'src/app/services/application-state.service';
import { ModalDialogService } from 'src/app/services/modal-dialog.service';
import { StackService } from 'src/app/services/stack.service';

@Component({
  selector: 'template-config',
  templateUrl: './help-modal.component.html',
  styleUrls: ['./help-modal.component.scss'],
})
export class HelpModalComponent {
  constructor(
    private _modalDialogService: ModalDialogService,
    // private _stackService: StackService,
    private _applicationStateService: ApplicationStateService
  ) {
    // this.get();
  }
  public faClose: IconDefinition = faClose;

  public closeModal() {
    this._modalDialogService.ActiveModal.dispose();
  }

  file: File;

  @Input() public t_name: string;
  @Input() public t_desc: string;
  @Input() public t_details: string;

  fileName: string = '';

  onFilechange(event: any) {
    console.log(event.target.files[0]);
    this.file = event.target.files[0];

    this.fileName = this.file.name;
  }

  CreateTemplate() {
    this._applicationStateService.addTemplate(
      this.t_name,
      this.t_desc,
      this.t_details
    );

    this.closeModal();
  }

  // get() {
  //   this._stackService
  //     .getProjectConfig()
  //     .pipe(take(1))
  //     .subscribe((resp) => {
  //       let res = JSON.parse(JSON.stringify(resp));

  //       this.aws_KeyId = res['AWS_AccessKeyId'];
  //       this.aws_Secretkey = res['AWS_SecretAccessKey'];
  //       this.fileName = res['GCP_APIKeyFileName'];
  //       this.projectName = res['GCP_ProjectName'];

  //       console.log(res);
  //     });
  // }
}
