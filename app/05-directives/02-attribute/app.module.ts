import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JLGDraggableDirective } from './jlg-draggable.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, JLGDraggableDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
