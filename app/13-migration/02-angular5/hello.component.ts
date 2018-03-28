import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
<div class="gray">
<button (click)="onClick()">Hello click me!</button> message: {{message}} <br>
</div>
`,
})
export class HelloComponent {
  message: string = 'coucou !';
  onClick() {
    console.log('click');
    if (this.message === 'coucou !') {
      this.message = "hello !";
    } else {
      this.message = 'coucou !'
    }
  }
}
