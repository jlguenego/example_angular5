import { Component, ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    setInterval(() => {
      this.counter++;
      // this.changeDetectorRef.markForCheck();
    }, 1000);
  }

  message = '';

  counter = 0;

  doSomething() {
    console.log('update message');
    this.message = 'hello';
  }
}
