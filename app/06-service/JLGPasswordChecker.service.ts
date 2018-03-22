import { Injectable } from '@angular/core';

export interface PasswordRule {
  verified: boolean,
  label: string,
  algo: (password: string) => boolean,
}



@Injectable()
export class JLGPasswordCheckerService {

  constructor() { }

  check(password: string): PasswordRule[] {

    const lengthRule: PasswordRule = {
      verified: false,
      label: 'length must be at least 8 characters',
      algo: password => password.length >= 8,
    };

    const atLeastOneUpperRule: PasswordRule = {
      verified: false,
      label: 'at least one uppercase letter',
      algo: password => /[A-Z]/.test(password),
    };

    const atLeastOneLowerRule: PasswordRule = {
      verified: false,
      label: 'at least one lowercase letter',
      algo: password => /[a-z]/.test(password),
    };

    const atLeastOneDigitRule: PasswordRule = {
      verified: false,
      label: 'at least one digit',
      algo: password => /[0-9]/.test(password),
    };

    const myPasswordRuleSet: PasswordRule[] = [
      lengthRule,
      atLeastOneUpperRule,
      atLeastOneLowerRule,
      atLeastOneDigitRule,
    ];

    myPasswordRuleSet.forEach(rule => {
      rule.verified = rule.algo(password);
    });
    return myPasswordRuleSet;
  }

}
