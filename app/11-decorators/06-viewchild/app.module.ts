import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ChildComponent } from './child.component';
import { HostComponent } from './host.component';
import { TotoComponent } from './toto.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HostComponent, ChildComponent, TotoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
