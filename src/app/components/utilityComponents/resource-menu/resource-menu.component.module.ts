import { NgModule } from '@angular/core';
import { ResourceMenuComponent } from './resource-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ResourceMenuComponent],
  exports: [ResourceMenuComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule],
})
export class ResourceMenuModule {}
