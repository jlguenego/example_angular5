import { Component } from '@angular/core';
import { CounterData } from './counter/counter.component';

@Component({
  selector: 'my-app',
  template: `
<header>Output Decorator</header>
<counter name="c1" on-count="onCount($event)"></counter>
<counter name="c2" (count)="onCount($event)"></counter>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  onCount(event: CounterData) {
    console.log('event', event);
  }
}
