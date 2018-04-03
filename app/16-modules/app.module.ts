import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloModule } from './hello.module';
import { TrucService } from './truc.service';

@NgModule({
  imports: [BrowserModule, HelloModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [TrucService],
})
export class AppModule { }
