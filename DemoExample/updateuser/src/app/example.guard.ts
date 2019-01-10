import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router} from '@angular/router';
import { TestService } from './test.service';
 
@Injectable()
export class ExampleGuard implements CanActivate {
  constructor(private test: TestService, 
    private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      
    if (this.test.abc()) {
      this.router.navigate(['/register']);
      return false;
    }
  return true;
  }

}
