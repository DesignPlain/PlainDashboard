import { NgModule } from '@angular/core';
import { SelectComponent } from './select.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SelectComponent],
  exports: [SelectComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule],
})
export class SelectModule {}
