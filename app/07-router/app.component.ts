import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <header>
    <a href="#">Home</a>
    <a href="#">About</a>
  </header>
  <router-outlet></router-outlet>
`,
})
export class AppComponent {

}
