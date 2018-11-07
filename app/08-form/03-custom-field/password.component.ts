import { Component, OnInit } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from "./AbstractValueAccessor";

@Component({
  selector: 'app-password',
  providers: [MakeProvider(PasswordComponent)],
  template: `
<input [type]="isVisible ? 'text' : 'password'" [(ngModel)]="value">
<button (click)="toggle()">Toggle</button>
`,
styles: ['button {position: relative; left: -0.4em; background: #eee;}'],
})
export class PasswordComponent extends AbstractValueAccessor {

  isVisible = false;

  toggle() {
    this.isVisible = !this.isVisible;
  }

}

