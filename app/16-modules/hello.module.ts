import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello.component';
import { TrucService } from './truc.service';

@NgModule({
  imports: [CommonModule],
  declarations: [HelloComponent],
  exports: [HelloComponent],
  providers: [TrucService]
})
export class HelloModule { }
