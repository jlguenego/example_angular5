import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<header>Class binding</header>
  <div *ngFor="let str of ['coucou', 'hello', 'truc', 'bidule']; let i = index" [class.odd]="i % 2">{{str}} {{i}}</div>
`,
styles: [
  `
  div {
    padding: 1em;
    background: hsl(0, 0%, 98%);
  }
  .odd {
    background: #eee;
  }
  `
]
})
export class AppComponent { }
