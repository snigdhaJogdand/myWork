import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-p',
  templateUrl: './p.component.html',
  styleUrls: ['./p.component.css']
})
export class PComponent implements OnInit 
{
  lform;
  failuremessage;
  cookieValue = 'UNKNOWN';
  constructor(private authService: AuthService, private router: Router ,private cookieService: CookieService
  ) { }

  ngOnInit() 
  {

  // this.cookieService.set( 'test', 'Hello World' );//key=test, value=hello world
  // this.cookieValue = this.cookieService.get('test');
  this.lform=new FormGroup(
    {
      email:new FormControl("",Validators.required),
      password:new FormControl("", Validators.required)
    }
  );
  }

  Submit=function(value)
  {  console.log("before auth service");
    console.log(value);
    // this.authService.p(value).subscribe((data)=>
    // {
    //   console.log("after auth service");
    //   if (data.status)
    //  {
    //     console.log(data.status);  
    //     this.router.navigate(['/']);
    //     // this.cookieService.set( 'test', value.email);
    //     // this.cookieValue = this.cookieService.get('test');
    //     // console.log( this.cookieValue);
    // } 
    // else 
    // {
    // this.failuremessage=data.message;
    // }
    // });
    this.authService.p(value).subscribe(()=>
    {
      console.log("after auth service");
      
        this.router.navigate(['/']);
    });
  
  }
}