import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regform;
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
    this.regform = new FormGroup({
      email: new FormControl(null, Validators.compose(
        [
          Validators.pattern('^[a-zA-Z]+[0-9]*[_.]?[0-9]*[a-zA-Z]*@[a-zA-Z0-9-]+[.][a-z.]+$'),
          Validators.required
        ]
      )),
      phone: new FormControl(null, Validators.compose(
        [
          Validators.required,
          Validators.pattern('^[789][0-9]+$'),
          Validators.minLength(10),
          Validators.maxLength(10)
        ]
      )),
      username: new FormControl(null, Validators.compose(
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z]+'),
          Validators.minLength(5),
          Validators.maxLength(15)
        ]
      )),
      password: new FormControl(null, Validators.compose(
        [
          Validators.required,
          Validators.pattern('((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{5,20})'),
        ]
      ))
    });
  }

  check = function (value) {
    if (value.touched && value.invalid) {
      return 'red'
      // if (value.invalid) {
      //   return 'red';
      // }
      // else {
      //   return null
      // }
    }
    else {
      return null;
    }
  }
  onSubmit = function (form) {
    this.authService.register(form).subscribe((data) => {
      console.log(data);
      if (data.status) {
        this.router.navigate(['']);
      }
    });
  }
}


