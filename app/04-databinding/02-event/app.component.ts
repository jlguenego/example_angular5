import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<h1>Event Binding</h1>
<button (click)="myAlert()">Click me!</button>
`,
})
export class AppComponent {
  myAlert() {
    window.alert('Hello event binding!');
  }
}
