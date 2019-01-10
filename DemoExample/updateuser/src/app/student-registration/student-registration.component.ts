import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  studentRegistration;
  ngOnInit() {
    this.studentRegistration = new FormGroup(
      {
        name: new FormControl("", Validators.required),
        fatherName: new FormControl("", Validators.required),
        motherName: new FormControl("", Validators.required),
        phone: new FormControl("", Validators.required),
        age: new FormControl("", Validators.required),
        gender: new FormControl("", Validators.required),
        address: new FormControl("", Validators.required),
        class: new FormControl("", Validators.required),
        standard: new FormControl("", Validators.required),
        email: new FormControl("", Validators.required)
      }
    );
  }
  onSubmit(user) {
    this.authService.studentRegistration(user).subscribe((data) => {
      if (data.status) {
        this.router.navigate(['/home']);
      }
    });
  }
}
