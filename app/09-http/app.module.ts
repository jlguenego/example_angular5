import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JoinPipe } from './join.pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, JoinPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
