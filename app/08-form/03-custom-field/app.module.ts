import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordComponent } from './password.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PasswordComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
