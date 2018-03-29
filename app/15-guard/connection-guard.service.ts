import { Injectable } from '@angular/core';

@Injectable()
export class ConnectionGuardService {
  set mode(value) {
    console.log('set mode to ', value);
    this._mode = value;
  }
  get mode() {
    return this._mode;
  }
  _mode: string = 'not-connected';
}
