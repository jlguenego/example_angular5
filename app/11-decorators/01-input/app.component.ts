import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<header>Input Decorator</header>
<hello first-name="Jean-Louis" lastName="GUÉNÉGO" [city]="myCity"></hello>
`,
})
export class AppComponent {
  myCity = 'Nancy';
  Jean: number = 32;
  Louis: number = 12;
}
