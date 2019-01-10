import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FilterPipe } from '../filter.pipe';
import { ColumnFilterPipe } from '../column-filter.pipe';
import * as _ from 'lodash';
@Component({
  selector: 'app-example-checkbox',
  templateUrl: './example-checkbox.component.html',
  styleUrls: ['./example-checkbox.component.css']
})
export class ExampleCheckboxComponent implements OnInit {
  values = [];
  classList;
  list = [];
  divisionList = [];
  data=[];
  filterClass = [];
  filterDivision = [];
  constructor(private authService: AuthService) {
  }
  ngOnInit() {
    this.divisionList = [
      { name: 'A', selected: true, id: 'A' },
      { name: 'B', selected: true, id: 'B' },
      { name: 'C', selected: true, id: 'C' },
      { name: 'D', selected: true, id: 'D' },
    ];
    this.classList = [
      { name: '1st', selected: true, id: '1' },
      { name: '2nd', selected: true, id: '2' },
      { name: '3rd', selected: true, id: '3' },
      { name: '4th', selected: true, id: '4' },
      { name: '5th', selected: true, id: '5' },
      { name: '6th', selected: true, id: '6' },
      { name: '7th', selected: true, id: '7' },
      { name: '8th', selected: true, id: '8' },
      { name: '9th', selected: true, id: '9' },
      { name: '10th', selected: true, id: '10' },
      { name: '11th', selected: true, id: '11' },
      { name: '12th', selected: true, id: '12' }
    ];
    this.authService.viewStudent().subscribe((data) => {
      if (data.status) {
        this.values = data.data;
        this.data = data.data;
        this.list = data.data;
        for (let i = 0; i < this.values.length; i++) {
          let temp = {
            text: this.values[i].class,
            value: true
          }
          this.filterClass.push(temp);
        }
        for (let i = 0; i < this.values.length; i++) {
          let temp = {
            text: this.values[i].standard,
            value: true
          }
          this.filterDivision.push(temp);
        }
      }
    });
  }
  FilterClass(item, $event) {
    var finalArray = [];
    item.selected = $event;
    if (!item.selected) {
      this.filterClass.forEach((element) => {
        if (element.text == item.id) {
          element.value = $event;
        }
      })
      for (let filterListData of this.filterClass) {
        if (filterListData.value) {
          for (let elements of this.values) {
            if (filterListData.text == elements.class) {
              finalArray.push(elements);
            }
          }
        }
      }
      this.data = _.uniq(finalArray);
    }
    else {
      this.filterClass.forEach((element) => {
        if (element.text == item.id) {
          element.value = $event;
        }
      })
      for (let filterListData of this.filterClass) {
        if (filterListData.value) {
          for (let elements of this.values) {
            if (filterListData.text == elements.class) {
              finalArray.push(elements);
            }
          }
        }
      }
      this.data = _.uniq(finalArray);
    }
    this.list = this.data;
  }
  FilterDivision(item, $event) {
    var finalDivisionArray = [];
    item.selected = $event;
    if (!item.selected) {
      this.filterDivision.forEach((element) => {
        if (element.text == item.id) {
          element.value = $event;
        }
      })
      for (let filterListData of this.filterDivision) {
        if (filterListData.value) {
          for (let elements of this.list) {
            if (filterListData.text == elements.standard) {
              finalDivisionArray.push(elements);
            }
          }
        }
      }
    }
    else {
      this.filterDivision.forEach((element) => {
        if (element.text == item.id) {
          element.value = $event;
        }
      });
      for (let filterListData of this.filterDivision) {
        if (filterListData.value) {
          for (let elements of this.list) {
            if (filterListData.text == elements.standard) {
              finalDivisionArray.push(elements);
            }
          }
        }
      }
    }
    this.data = _.uniq(finalDivisionArray);
  }

}
