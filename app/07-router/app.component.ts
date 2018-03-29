import { Component } from '@angular/core';
import './app.component.scss';

@Component({
  selector: 'my-app',
  template: `
  <header>
    <nav>
    <a routerLink="/">Home</a>
    <a routerLink="/product/5">Product#5</a>
    <a routerLink="/about">About</a>
    </nav>
  </header>
  <router-outlet></router-outlet>
`,
})
export class AppComponent {

}
