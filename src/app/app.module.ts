import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CdkDrag, CdkDropList, CdkDragHandle } from '@angular/cdk/drag-drop';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ResizeObserverDirective } from './resize-observer.directive';
import { HttpClientModule } from '@angular/common/http';


import {
  CdkMenu,
  CdkMenuItem,
  CdkMenuItemRadio,
  CdkMenuGroup,
  CdkMenuItemCheckbox,
  CdkMenuTrigger,
  CdkContextMenuTrigger,
} from '@angular/cdk/menu';
import { LineComponent } from './components/line/line.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourceListComponent,
    PlaygroundComponent,
    InputSearchComponent,
    SideBarComponent,
    ResizeObserverDirective,
    LineComponent
  ],
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
