import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { selectorAuth } from './auth.reducer';

@Injectable()
export class AuthGuardService implements CanActivate {
  isAuthenticated = false;

  constructor(private store: Store<any>, private router: Router) {
    this.store
      .select(selectorAuth)
      .subscribe(auth => (this.isAuthenticated = auth.isAuthenticated));
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.isAuthenticated) {
      this.router.navigate(['/login'], {
        queryParams: {
          returnUrl: state.url
        }
      });
    } else {
      return true;
    }
    return false;
  }
}
