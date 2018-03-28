import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegionService } from './region.service';
import { JLGModule } from '@jlg-example-angular-common/JLGModule/JLG.module';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, JLGModule],
  declarations: [AppComponent],
  providers: [RegionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
