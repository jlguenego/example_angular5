import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgeValidatorDirective } from '@jlg-example-angular-common/JLGModule/age.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, AgeValidatorDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
