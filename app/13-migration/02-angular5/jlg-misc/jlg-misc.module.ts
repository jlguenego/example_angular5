import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JLGClickAndDisableDirective } from './jlgclick-and-disable.directive';
import { RestService } from './rest.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [JLGClickAndDisableDirective],
  exports: [JLGClickAndDisableDirective],
  providers: [
    RestService
  ]
})
export class JLGMiscModule { }
