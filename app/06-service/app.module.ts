import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JLGPasswordToCheck } from './JLGPasswordCheck.component';

import { JLGPasswordCheckerService } from './JLGPasswordChecker.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, JLGPasswordToCheck],
  providers: [
    JLGPasswordCheckerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
