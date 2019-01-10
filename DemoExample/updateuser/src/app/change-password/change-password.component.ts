import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm;
  email;
  message;
  constructor(private http: Http, private authService: AuthService, private router: Router) { }
  ngOnInit() {
    this.changePasswordForm = new FormGroup(
      {
        oldPassword: new FormControl("", Validators.required),
        newPassword: new FormControl("", Validators.required)
      });
    this.email = localStorage.getItem("GetTheEmail");
    console.log(this.email);
  }
  onSubmit(user) {
    var input = {
      "oldPassword": user.oldPassword,
      "newPassword": user.newPassword,
      "email": this.email
    }
    this.authService.changePassword(input).subscribe((data) => {
      if (data.status) {
        this.router.navigate(['/home']);
      }
      else {
        this.message="Incorrect Password! "
        console.log("error" + data.message)
      }
    });
  }
}
