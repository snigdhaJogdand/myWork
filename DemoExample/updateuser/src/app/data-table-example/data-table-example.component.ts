import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Http, Response } from '@angular/http';
import { AuthService } from '../auth.service';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
@Component({
  selector: 'app-data-table-example',
  templateUrl: './data-table-example.component.html',
  styleUrls: ['./data-table-example.component.css']
})
export class DataTableExampleComponent implements OnInit {
  list = [];
  values = [];
  displayEvent: any;
  calendarOptions: any;
  tittle;
  rollNo = [];
  rollNumber;
  item;
  constructor(private http: Http, private authService: AuthService, public datepipe: DatePipe) { }
  ngOnInit() {
    this.authService.calenderData().subscribe(item => {
      console.log("item: ", item.data);
      if (item.status) {
        this.values = item.data;
      }
    });
  }
  myFunction(value) {
    this.item = [];
    this.tittle = [];
    this.rollNo = this.values.map((element, index) => {
      if (element.rollNo == value) {
        this.tittle[index] = {
          title: element.status == 'absent' ? 'ABSENT' : 'PRESENT',
          start: moment(element.date).format('YYYY-MM-DD'),
          rollNo: element.rollNo,
          textColor: 'black',
          color: "yellow",
          backgroundColor: element.status == 'absent' ? '#ff6666' : '#b3ff1a',
        };
        return element;
      }
      console.log("this.tittle: ", this.tittle);
    });
    _.remove(this.tittle, function (n) {
      return n == null;
    })
    this.calendarOptions = {
      editable: false,
      eventLimit: true,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      events: this.tittle,
      eventColor: 'white'
    };
  }
}
