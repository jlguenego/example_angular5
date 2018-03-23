import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { JLGModule } from '@jlg-example-angular-common/JLGModule/JLG.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, JLGModule],
  declarations: [AppComponent],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
