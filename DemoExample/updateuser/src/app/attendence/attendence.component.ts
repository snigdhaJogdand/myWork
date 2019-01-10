import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {
  constructor(private http: Http, private authService: AuthService) { }
  aform;
  list = [];
  ngOnInit() {
    this.aform = new FormGroup(
      {
        date: new FormControl("", Validators.required),
        class: new FormControl("", Validators.required)
      });
  }
  onSubmit(user) {
    this.authService.attendence(user).subscribe((data) => {
      if (data.status) {
        this.list = data.data;
        console.log(this.list.length);
      }
      else {
        alert("No data found!");
        this.list = data.data;
      }
    });
  }
}
