import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JLGLayoutModule } from './jlg-layout/jlg-layout.module';

@NgModule({
    imports: [BrowserModule, JLGLayoutModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
