import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CdkDrag} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    ResourceListComponent,
    PlaygroundComponent,
    InputSearchComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    CdkDrag
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
