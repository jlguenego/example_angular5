import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  show: boolean = false;
  persons = ['Jean-Louis', 'Maïté', 'Dany'];
  // someone = 'titi';
  someone = 'Maïté';
}
