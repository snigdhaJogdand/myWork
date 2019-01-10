import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DISABLED } from '@angular/forms/src/model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css']
})
export class FormUpdateComponent implements OnInit {
  rform;
  getdata = {
    email: "",
    phone: "",
    username: "",
    password: ""
  };
  lemail;
  gemail;
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
    this.lemail = 'b@gmail.com';
    this.gemail = localStorage.getItem("GetTheEmail");
    this.rform = new FormGroup(
      {
        email: new FormControl(""),
        phone: new FormControl("", Validators.compose(
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10)
          ]
        )),
        username: new FormControl("", Validators.required),
        password: new FormControl("", Validators.required)
      }
    );

    const user = {
      "email": this.gemail
    }
    this.authService.viewdata(user).subscribe((data) => {
      if (data.status) {
        this.getdata = data.userList[0];
        console.log("...................",this.getdata)
      } else {
        console.log("Unsuccessful !!!!",data);
      }
    });
  }
  onSubmit = function (form) {
    form['email'] = this.gemail;
    console.log(form);
    //console.log(form);
    //console.log('Enter the data to update values !');
    this.authService.updateuser(form).subscribe((data) => {
      if (data.status) {
        console.log(data);
        this.router.navigate(['/home']);
      }
      else {
        console.log(data);
        console.log("error" + data.message)
      }
    });
  }
}


