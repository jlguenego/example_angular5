import { Component, Input } from '@angular/core';
import { JLGPasswordCheckerService } from './password.service';

@Component({
  selector: 'jlg-password-check',
  template: `
<span>password check</span>
<span>{{checkResult}}</span>
`,
  providers: [JLGPasswordCheckerService],
})

export class JLGPasswordToCheck {
  constructor(private myService: JLGPasswordCheckerService) { }

  myPassword: string = '';
  @Input('passwordToCheck') set passwordToCheck(password: string) {
    this.myPassword = password;
    this.checkResult = this.myService.check(this.myPassword);
  };
  checkResult: boolean;
}
