import { Component } from '@angular/core';
import { TrucService } from './truc.service';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  // providers: [TrucService],
})
export class HelloComponent {
  constructor(private truc: TrucService) {
    console.log('HelloComponent: trucservice', truc.id);
  }
}
