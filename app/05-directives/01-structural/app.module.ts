import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JLGTimesDirective } from './jlgTimes.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, JLGTimesDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
