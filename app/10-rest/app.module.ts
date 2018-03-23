import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
