import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

var exam="tokenValue";
localStorage.setItem("ExampleToken",exam);
@Injectable()
export class TestService {

  constructor(public jwtHelper: JwtHelperService) { }


  public abc(): boolean {
    const token = localStorage.getItem('token');
    console.log("token is :"+token);
    return this.jwtHelper.isTokenExpired(token);
  }
}

