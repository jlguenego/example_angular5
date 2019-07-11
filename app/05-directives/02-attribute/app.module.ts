import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JLGDraggableDirective } from './jlg-draggable.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, JLGDraggableDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
