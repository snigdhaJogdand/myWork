import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  lform;
  g;
  failuremessage;
  cookieValue = 'UNKNOWN';
  constructor(private authService: AuthService, private router: Router,private cookieService: CookieService) { }

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
  this.authService.test(value).subscribe((data) => { 
  if (data.status) {
        console.log(data.status);
        localStorage.setItem("GetTheEmail",value.email);    
        
        this.g=localStorage.getItem("GetTheEmail");
        console.log("the value of token is "+this.g);
        this.router.navigate(['/test2']);
        this.cookieService.set( 'test', value.email);

        this.cookieValue = this.cookieService.get('test');
        console.log( this.cookieValue);
      
    } else {
    this.failuremessage=data.message;
  }
    });
  }
}
