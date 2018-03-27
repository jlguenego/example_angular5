import { Injectable } from '@angular/core';

export interface PasswordRule {
  verified: boolean,
  label: string,
  rule: (password: string) => boolean,
}



@Injectable()
export class JLGPasswordCheckerService {

  constructor() { }

  check(password: string): PasswordRule[] {

    const lengthRule: PasswordRule = {
      verified: false,
      label: 'length must be at least 8 characters',
      rule: password => password.length >= 8,
    };

    const atLeastOneUpperRule: PasswordRule = {
      verified: false,
      label: 'at least one uppercase letter',
      rule: password => /[A-Z]/.test(password),
    };

    const atLeastOneLowerRule: PasswordRule = {
      verified: false,
      label: 'at least one lowercase letter',
      rule: password => /[a-z]/.test(password),
    };

    const atLeastOneDigitRule: PasswordRule = {
      verified: false,
      label: 'at least one digit',
      rule: password => /[0-9]/.test(password),
    };

    const myPasswordRuleSet: PasswordRule[] = [
      lengthRule,
      atLeastOneUpperRule,
      atLeastOneLowerRule,
      atLeastOneDigitRule,
    ];

    myPasswordRuleSet.forEach(rule => {
      rule.verified = rule.rule(password);
    });
    return myPasswordRuleSet;
  }

}
