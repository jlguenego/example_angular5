import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JLGLayoutModule } from './jlg-layout/jlg-layout.module';
import { JLGRouteModule } from './jlg-route/jlg-route.module';

@NgModule({
    imports: [BrowserModule, JLGLayoutModule, JLGRouteModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
