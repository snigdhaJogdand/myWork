import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  eform;
  errorM;
  errorMessage;
  list = [];
  aForm;
  date;
  statusList = [];
  finalArray = [];
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.statusList = [
      { name: 'Absent', selected: false, id: 'absent' },
      { name: 'Present', selected: false, id: 'present' }
    ];
    this.eform = new FormGroup(
      {
        class: new FormControl("", Validators.required),
        standard: new FormControl("", Validators.required),
      }
    );
  }
  onSubmit(user) {
    this.authService.entry(user).subscribe((data) => {
      if (data.status) {
        this.list = data.data;
      }
    });
  }
  selectStatus(item, $event) {
    item.status = $event;
    item.date = this.date;
    this.finalArray = item;
    this.errorM=item.name;
  }
  onSubmitButton() {
    this.list.forEach(elements => {
      this.authService.demoAttendance(elements).subscribe(data => {
        if(data.status){
          this.errorMessage=false;
        }
        else{
          this.errorMessage=true;
        }
      });
      // this.authService.takeAttendance(elements).subscribe((data) => {
      //   console.log(data);
      //   if (data.status) {
      //     console.log("data is: ", data);
      //   }
      // })
    })
  }
}
