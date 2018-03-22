import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <header>
    <nav>
    <a routerLink="/home">Home</a>
    <a routerLink="/about">About</a>
    </nav>
  </header>
  <router-outlet></router-outlet>
`,
})
export class AppComponent {

}
