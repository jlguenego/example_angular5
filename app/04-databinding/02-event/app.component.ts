import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<h1>Event Binding</h1>
<div>
  <button (click)="myAlert()">Click me!</button>
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
