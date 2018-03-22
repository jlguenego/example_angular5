import { Component, Input } from '@angular/core';
import { JLGPasswordCheckerService, PasswordRule } from './JLGPasswordChecker.service';

@Component({
  selector: 'jlg-password-check',
  template: `
  <div>
  <h2>password check</h2>
  <div *ngFor="let rule of rules" [ngStyle]="{'text-decoration': rule.verified ? 'none': 'line-through'}">{{rule.label}}</div>
  </div>

`,
  providers: [JLGPasswordCheckerService],
})

export class JLGPasswordToCheck {
  constructor(private myService: JLGPasswordCheckerService) { }

  myPassword: string = '';
  @Input('passwordToCheck') set passwordToCheck(password: string) {
    this.myPassword = password;
    this.rules = this.myService.check(this.myPassword);
  };
  rules: PasswordRule[];
}
