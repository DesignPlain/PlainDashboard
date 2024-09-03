import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CdkDrag, CdkDropList, CdkDragHandle } from '@angular/cdk/drag-drop';
import { ResourceConfigComponent } from './components/resource-config/resource-config.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ResizeObserverDirective } from './resize-observer.directive';
import { HttpClientModule } from '@angular/common/http';

import { LineComponent } from './components/line/line.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { CardComponent } from './components/card/card.component';
import { ConfigModalComponent } from './components/config-options/config-modal/config-modal.component';
import { ConfigOptionsComponent } from './components/config-options/config-options.component';
import { SelectModule } from './components/utilityComponents/select/select.component.module';

import { MatTooltipModule } from '@angular/material/tooltip';
import { ResourceConfigFieldsComponent } from './components/resource-config/resource-config-fields/resource-config-fields.component';
import { KeyValueArrayComponent } from './components/utilityComponents/key-value-array/key-value-array.component';
import { APP_BASE_HREF } from '@angular/common';
import { ResourceMenuModule } from './components/tool-bar/resource-menu/resource-menu.component.module';
import { environment } from 'src/environments/environment';
import { TemplateConfigComponent } from './components/template-config/template-config.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourceListComponent,
    PlaygroundComponent,
    InputSearchComponent,
    ResourceConfigComponent,
    ResourceConfigFieldsComponent,
    ResizeObserverDirective,
    LineComponent,
    ToolBarComponent,
    CardComponent,
    ConfigModalComponent,
    ConfigOptionsComponent,
    KeyValueArrayComponent,
    TemplateConfigComponent,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: environment.appBasePath }],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    CdkDrag,
    CdkDropList,
    CdkDragHandle,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    SelectModule,
    MatTooltipModule,
    ResourceMenuModule,
  ],
})
export class AppModule {}
