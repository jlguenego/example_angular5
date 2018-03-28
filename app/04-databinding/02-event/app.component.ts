import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<header>Event Binding</header>
<div>
  <button (click)="myAlert()">Click me!</button>
  <button on-click="myAlert()">Click me with canonical form!</button>
</div>
`, styles: [`
div {
  text-align: center;
  font-size: 2em;
}
`],
})
export class AppComponent {
  myAlert() {
    window.alert('Hello event binding!');
  }
}
