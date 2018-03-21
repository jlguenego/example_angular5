import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DraggableDirective } from './draggable.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, DraggableDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
