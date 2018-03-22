import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<h1>Service</h1>
<div>
  <input type="password" [(ngModel)]="myPassword" >
</div>
<div>
<jlg-password-check [passwordToCheck]="myPassword" ></jlg-password-check>


`,
})
export class AppComponent {
  myPassword: string = '';
}
