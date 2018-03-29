import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JLGClickAndDisableDirective } from './jlgclick-and-disable.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [JLGClickAndDisableDirective],
  exports: [JLGClickAndDisableDirective]
})
export class JLGMiscModule { }
