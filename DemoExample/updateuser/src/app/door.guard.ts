import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Injectable()
export class DoorGuard implements CanActivate {
  constructor(private auth:AuthService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {

      if( !this.auth.setUserLoggedIn() )
      {
        this.router.navigate(['/']);
        console.log("you can't visit the page  !!!");
        return false;
      }
      return true;
      }
      
}
