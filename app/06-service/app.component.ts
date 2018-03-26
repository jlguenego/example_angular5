import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<header>Service</header>
<div>
  <input type="text" [(ngModel)]="myPassword" required>
</div>
<jlg-password-check [passwordToCheck]="myPassword" ></jlg-password-check>
`,
styles: [
  `
  div {
    padding: 1em;
  }
  `
]
})
export class AppComponent {
  myPassword: string = '';
}
