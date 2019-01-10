import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Http} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
tokenvalue;
  constructor(private authService: AuthService, private router: Router,private cs: CookieService) { }

  ngOnInit() {
    this.tokenvalue=localStorage.getItem("LoginEmail");
    // this.cs.delete('test');
  }
  

  logout=function()
  {
     
    //  this.authService.test2().subscribe((data) => { 
      //     });

        localStorage.removeItem("LoginEmail");
        localStorage.clear();
        this.cs.delete('test');

        
  }
}
