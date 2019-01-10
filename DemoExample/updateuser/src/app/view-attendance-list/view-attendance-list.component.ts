import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as _ from 'lodash';
import { DatePipe } from '@angular/common';
import { AuthService } from '../auth.service';
import { FilterPipe } from '../filter.pipe';
import { ColumnFilterPipe } from '../column-filter.pipe';
import { OrderrByPipePipe } from '../orderr-by-pipe.pipe'
@Component({
  selector: 'app-view-attendance-list',
  templateUrl: './view-attendance-list.component.html',
  styleUrls: ['./view-attendance-list.component.css']
})
export class ViewAttendanceListComponent implements OnInit {

  constructor(private http: Http, private authService: AuthService, public datepipe: DatePipe) { }
  flag = 0;
  subData = [];
  date;
  list = [];
  values = [];
  classList;
  divisionList = [];
  data = [];
  filterClass = [];
  statusList = [];
  filterDivision = [];
  direction: number;
  isDesc: boolean = false;
  column: string;
  ngOnInit() {
    this.statusList = [
      { name: 'absent', selected: true, id: 'absent' },
      { name: 'present', selected: true, id: 'present' }
    ];
    this.divisionList = [
      { name: 'A', selected: true, id: 'A' },
      { name: 'B', selected: true, id: 'B' },
      { name: 'C', selected: true, id: 'C' },
      { name: 'D', selected: true, id: 'D' },
    ];
    this.classList = [
      { name: '1', selected: true, id: '1' },
      { name: '2', selected: true, id: '2' },
      { name: '3', selected: true, id: '3' },
      { name: '4', selected: true, id: '4' },
      { name: '5', selected: true, id: '5' },
      { name: '6', selected: true, id: '6' },
      { name: '7', selected: true, id: '7' },
      { name: '8', selected: true, id: '8' },
      { name: '9', selected: true, id: '9' },
      { name: '10', selected: true, id: '10' },
      { name: '11', selected: true, id: '11' },
      { name: '12', selected: true, id: '12' }
    ];
    // this.authService.viewStudentList(this.date).subscribe((data) => {
    //   if (data.status) {
    //     this.values = data.data;
    //     this.data = data.data;
    //     for (let i = 0; i < this.values.length; i++) {
    //       let temp = {
    //         className: this.values[i].class,
    //         classValue: true,
    //         division: this.values[i].standard,
    //         divisionValue: true,
    //         status: this.values[i].status,
    //         statusValue: true,
    //         date: this.values[i].date
    //       }
    //       this.filterClass.push(temp);
    //     }
    //   }
    // });
  }
  filterDate($event) {
    this.flag = 1;
    var SDate = $event;
    var dateFilter = [];
    for (let elements of this.values) {
      let latest_date = this.datepipe.transform(elements.date, 'yyyy/MM/dd');
      let selectedDate = this.datepipe.transform(SDate, 'yyyy/MM/dd');
      if (selectedDate == latest_date) {
        console.log("Elements: ",elements);
        dateFilter.push(elements);
      }
    }
    this.subData = _.uniq(dateFilter);
    this.data = _.uniq(dateFilter);
  }
  FilterData($event, item) {
    var finalArray = [];
    item.selected = $event;
    if (!item.selected) {
      this.filterClass.forEach((element) => {
        if (element.className == item.id) {
          element.classValue = $event;
        }
        if (element.division == item.id) {
          element.divisionValue = $event;
        }
        if (element.status == item.id) {
          element.statusValue = $event;
        }
      })
    }
    else {
      this.filterClass.forEach((element) => {
        if (element.className == item.id) {
          element.classValue = $event;
        }
        if (element.division == item.id) {
          element.divisionValue = $event;
        }
        if (element.status == item.id) {
          element.statusValue = $event;
        }
      })
    }
    for (let elements of this.subData) {
      for (let items of this.filterClass) {
        if (elements.class == items.className) {
          if (items.classValue) {
            if (elements.standard == items.division) {
              if (items.divisionValue) {
                if (elements.status == items.status) {
                  if (items.statusValue) {
                    finalArray.push(elements);
                  }
                }
              }
            }
          }
        }
      }
    }
    this.data = _.uniq(finalArray);
  }
  sort(property) {
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }
}
