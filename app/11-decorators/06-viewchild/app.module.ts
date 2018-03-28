import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { JLGService, JLGModuleService } from './jlg.service';
import { ChildComponent } from './child.component';
import { ParentComponent } from './parent.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ParentComponent, ChildComponent ],
  providers: [{ provide: JLGService, useClass: JLGModuleService }],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
