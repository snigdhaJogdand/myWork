import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router} from '@angular/router';
import { SecureService } from './secure.service';

@Injectable()
export class SecuredGuard implements CanActivate {
  constructor(public sec: SecureService, 
    public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

if (!this.sec.isTokenExpired()) {
    return true;
}
console.log("hey");
this.router.navigate(['']);
return false;
 //return true;
  }
}
