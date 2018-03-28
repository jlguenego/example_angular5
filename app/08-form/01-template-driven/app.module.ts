import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { JLGModule } from '@jlg-example-angular-common/JLGModule/JLG.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, JLGModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
