import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConnectionGuardService implements CanActivate {

  constructor(private router: Router) { }

  set mode(value) {
    console.log('set mode to ', value);
    this._mode = value;
  }
  get mode() {
    return this._mode;
  }
  _mode: string = 'not-connected';

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const result = this._mode === 'connected';
    if (!result) {
      this.router.navigate(['/not-found']);
    }
    return result;
  }
}
