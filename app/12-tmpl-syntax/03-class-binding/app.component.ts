import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<header>Class binding</header>
  <div [style.padding]="myPadding" *ngFor="let str of ['coucou', 'hello', 'truc', 'bidule']; let i = index" [class.odd]="i % 2">{{str}} {{i}}</div>
`,
styles: [
  `
  div {
    background: hsl(0, 0%, 98%);
  }
  .odd {
    background: #eee;
  }
  `
]
})
export class AppComponent { 
  myPadding = '1em';
}
