import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  viewStudentForm;
  data;
  list;
  studentStatus = {
    standard: [
      { name: 'A', selected: true, id: 'A' },
      { name: 'B', selected: true, id: 'B' },
      { name: 'C', selected: true, id: 'C' },
      { name: 'D', selected: true, id: 'D' }
    ],
    className: [
      { name: '1st class', selected: true, id: '1' },
      { name: '2nd class', selected: true, id: '2' },
      { name: '3rd class', selected: true, id: '3' },
      { name: '4th class', selected: true, id: '4' },
      { name: '5th class', selected: true, id: '5' },
      { name: '6th class', selected: true, id: '6' },
      { name: '7th class', selected: true, id: '7' },
      { name: '8th class', selected: true, id: '8' },
      { name: '9th class', selected: true, id: '9' },
      { name: '10th class', selected: true, id: '10' },
      { name: '11th class', selected: true, id: '11' },
      { name: '12th class', selected: true, id: '12' }
    ]
  }
  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }
  ngOnInit() {
    this.viewStudentForm = this.fb.group({
      standard: this.buildStandard(),
      className: this.buildClass()
    });
    this.authService.viewStudent().subscribe((data) => {
      if (data.status) {
        this.list = data.data;
      }
    });
  }
  get standard(): FormArray {
    return this.viewStudentForm.get('standard') as FormArray;
  };
  get className(): FormArray {
    return this.viewStudentForm.get('className') as FormArray;
  };
  buildClass() {
    const arr = this.studentStatus.className.map(s => {
      return this.fb.control(s.selected);
    })
    return this.fb.array(arr);
  }
  buildStandard() {
    const arr = this.studentStatus.standard.map(s => {
      return this.fb.control(s.selected);
    })
    return this.fb.array(arr);
  }
  onSubmit = function (filterData) {
    this.data = Object.assign(filterData, {
      standard: filterData.standard.map((s, i) => {
        return {
          id: this.studentStatus.standard[i].id,
          selected: s
        }
      }),
      className: filterData.className.map((s, i) => {
        return {
          id: this.studentStatus.className[i].id,
          selected: s
        }
      })
    })
    this.authService.filterStudentDetails(filterData).subscribe((responseData) => {
      console.log("Response Data: ",responseData);
      if (responseData.status) {
        this.list = responseData.data;
      }
    })
  }
}
