import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyAppComponent }  from './app/my-app.component';
import { ChildComponent }  from './child/child.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ MyAppComponent, ChildComponent ],
  bootstrap:    [ MyAppComponent ]
})
export class AppModule { }
