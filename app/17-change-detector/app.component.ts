import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  constructor() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }

  message = '';

  counter = 0;

  doSomething() {
    console.log('update message');
    this.message = 'hello';
  }
}
