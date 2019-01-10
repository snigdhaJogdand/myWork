import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
//import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable()
export class AuthService {
  public username;
  private isLoggedIn;
  constructor(private http: Http) {
    this.isLoggedIn = false;
  }
  setUserLoggedIn() {
    this.isLoggedIn = true;
    this.username = localStorage.getItem("GetTheEmail");
    return this.username;
  }
  //
  calenderData(){
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.get('/api/calenderData', { headers: headers })
      .map(res => res.json());
  }
  //
  takeAttendance(user) {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.post('/api/takeAttendance', user, { headers: headers })
      .map(res => res.json());
  }
  demoAttendance(user) {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post("/api/demoAttendance", user, { headers: headers }).map((res: Response) => res.json());
  }
  //
  viewStudentList(user) {
    console.log(user)
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post("/api/viewStudentList", user, { headers: headers }).map((res: Response) => { res.json()});
  }
  //
  viewStudent() {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.get("/api/viewStudent", { headers: headers }).map((res: Response) => res.json());
  }
  filterStudentDetails(user) {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.post('/api/filterStudent', user, { headers: headers })
      .map(res => res.json());
  }
  studentRegistration(user) {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.post('/api/studentRegistration', user, { headers: headers })
      .map(res => res.json());
  }
  changePassword(user) {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.post('/api/changePassword', user, { headers: headers })
      .map(res => res.json());
  }

  insert(user) {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.post('/api/insert', user, { headers: headers })
      .map(res => res.json());
  }
  display(user) {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post("/api/update", user, { headers: headers }).map((res: Response) => res.json());
  }
  viewdata(user) {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post("/api/viewinfo", user, { headers: headers }).map((res: Response) => res.json());
  }
  updateuser(user) {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post("/api/updateuser", user, { headers: headers }).map((res: Response) => res.json());
  }
  login(user) {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post("/api/login", user, { headers: headers }).map((res: Response) => res.json());
  }
  register(user) {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post("/api/register", user, { headers: headers }).map((res: Response) => res.json());
  }

  demo(user) {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post("/api/demo", user, { headers: headers }).map((res: Response) => res.json());
  }
  test(user) {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post("/api/test", user, { headers: headers }).map((res: Response) => res.json());
  }

  test2() {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post("/api/test2", { headers: headers }).map((res: Response) => res.json());
  }

  p(user) {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post("/api/p", user, { headers: headers }).map((res: Response) => res.json);
  }

  attendence(user) {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post("/api/attendence", user, { headers: headers }).map((res: Response) => res.json());
  }

  entry(user) {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.post("/api/entry", user, { headers: headers }).map((res: Response) => res.json());
  }
  nsodevices() {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('charset', 'UTF-8');
    return this.http.get("/api/nsopromise", { headers: headers }).map((res: Response) => res.json());
  }
  a = 10;
  example() {
    console.log("the value of a is " + this.a);
  }
}