import { Component, ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  counter: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.counter++;

    }, 2000);
  }

}
