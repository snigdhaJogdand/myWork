import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Http} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  regform;
  ngOnInit() {


  this.regform=new FormGroup({
    email:new FormControl(""),
    phone:new FormControl(""),
    username:new FormControl("",),
    password:new FormControl("",)
  });
  console.log(this.regform);
}

onSubmit=function(form)
  {
  console.log(form);
  this.authService.demo(form).subscribe((data) => {
    console.log(data);
    if (data.status) {
      console.log("welcome !!!");
    } else {
      console.log("Unsuccessful !!!!");
    }
  });
   }
  }


