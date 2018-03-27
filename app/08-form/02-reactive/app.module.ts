import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgeValidatorDirective } from './age.directive';
import { HttpClientModule } from '@angular/common/http';
import { RegionService } from './region.service';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  declarations: [AppComponent, AgeValidatorDirective],
  providers: [RegionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
