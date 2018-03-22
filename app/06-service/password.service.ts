import { Injectable } from '@angular/core';

@Injectable()
export class JLGPasswordCheckerService {

  constructor() { }

  check(password: string) {
    console.log('Coucou je checke');
    if (password.startsWith('a')) {
      return false;
    }
    return true;
  }

}
