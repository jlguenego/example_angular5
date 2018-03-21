import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JLGTimesDirective } from './jlgTimes.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, JLGTimesDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
