import { Component } from '@angular/core';
import './app.component.scss';

@Component({
  selector: 'my-app',
  template: `
  <header>
    <nav>
    <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
    <a routerLink="/product/5" routerLinkActive="active">Product#5</a>
    <a routerLink="/about" routerLinkActive="active">About</a>
    </nav>
  </header>
  <router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

}
