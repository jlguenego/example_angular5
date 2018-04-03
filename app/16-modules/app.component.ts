import { Component } from '@angular/core';
import { TrucService } from './truc.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private truc: TrucService) {}
}
