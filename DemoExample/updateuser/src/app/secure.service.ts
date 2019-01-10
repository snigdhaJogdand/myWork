import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as jwt_decode from 'jwt-decode';
import { Http, Response, Headers } from '@angular/http';
export const TOKEN_NAME: string = 'jwt_token';

@Injectable()
export class SecureService {

  private url: string = 'api/auth';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http ) {}

 getToken(): string {
   console.log(TOKEN_NAME);
   console.log("get token");
  return localStorage.getItem(TOKEN_NAME);

}
//setting the token in the local storage
setToken(token: string): void {
  localStorage.setItem(TOKEN_NAME, token);
  console.log("set token");
}

getTokenExpirationDate(token: string): Date {
  this.setToken(TOKEN_NAME);
  const decoded = jwt_decode(token);

  if (decoded.exp === undefined) return null;
  const date = new Date(0); 
  date.setUTCSeconds(decoded.exp);
  console.log("get token expired date");
  return date;
} 

isTokenExpired(token?: string): boolean {
  console.log("is token expired");
  if(!token) token = this.getToken();
  if(!token) return true;
  const date = this.getTokenExpirationDate(token);
  if(date === undefined) return false;
  return !(date.valueOf() > new Date().valueOf());
}

login(user): Promise<string> {
  return this.http
    .post(`${this.url}/login`, JSON.stringify(user), { headers: this.headers })
    .toPromise()
    .then(res => res.text());
}

}
