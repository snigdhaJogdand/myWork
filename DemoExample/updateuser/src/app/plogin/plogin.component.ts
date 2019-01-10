import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-plogin',
  templateUrl: './plogin.component.html',
  styleUrls: ['./plogin.component.css']
})
export class PloginComponent implements OnInit {
  lform;
  failuremessage;
  cookieValue = 'UNKNOWN';
  constructor(private authService: AuthService, private router: Router,private cookieService: CookieService
) { }

  ngOnInit() {

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
  {  
    console.log(value);
    this.authService.p(value).subscribe((data)=>
    {
      console.log("a");
      if (data.status)
     {
        console.log(data.status);  
        this.router.navigate(['/']);
        // this.cookieService.set( 'test', value.email);
        // this.cookieValue = this.cookieService.get('test');
        // console.log( this.cookieValue);
      
    } 
    else 
    {
    this.failuremessage=data.message;
    }
    });
  }
}
