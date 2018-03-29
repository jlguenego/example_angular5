import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './AppRouting/AppRouting.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './AppRouting/home.component';
import { AboutComponent } from './AppRouting/about.component';
import { ProductComponent } from './AppRouting/product.component';
import { FormsModule } from '@angular/forms';
import { ConnectionGuardService } from './connection-guard.service';
import { NotFoundComponent } from './AppRouting/not-found.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  declarations: [AppComponent, HomeComponent, AboutComponent, ProductComponent, NotFoundComponent],
  bootstrap: [AppComponent], 
  providers: [ConnectionGuardService],
})
export class AppModule { }
