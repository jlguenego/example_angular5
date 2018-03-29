import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './AppRouting/AppRouting.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './AppRouting/home.component';
import { AboutComponent } from './AppRouting/about.component';
import { ProductComponent } from './AppRouting/product.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, HomeComponent, AboutComponent, ProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
