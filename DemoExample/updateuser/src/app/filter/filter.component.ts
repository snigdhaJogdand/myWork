import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import * as _ from 'lodash';
import { FilterPipe } from '../filter.pipe';
import { ColumnFilterPipe } from '../column-filter.pipe';
import { OrderrByPipePipe } from '../orderr-by-pipe.pipe'
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  values = [];
  classList;
  divisionList = [];
  data = [];
  filterClass = [];
  filterDivision = [];
  direction: number;
  isDesc: boolean = false;
  column: string;
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
        for (let i = 0; i < this.values.length; i++) {
          let temp = {
            className: this.values[i].class,
            classValue: true,
            division: this.values[i].standard,
            divisionValue: true
          }
          this.filterClass.push(temp);
        }
      }
    });
  }
  sort(property) {
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

  FilterData(item, $event) {
    var finalArray = [];
    item.selected = $event;
      this.filterClass.forEach((element) => {
        if (element.className == item.id) {
          element.classValue = $event;
        }
        if (element.division == item.id) {
          element.divisionValue = $event;
        }
      })
    for (let elements of this.values) {
      for (let items of this.filterClass) {
        if (elements.class == items.className) {
          if (items.classValue) {
            if (elements.standard == items.division) {
              if (items.divisionValue) {
                finalArray.push(elements);
              }
            }
          }
        }
      }
    }
    this.data = _.uniq(finalArray);
  }
}
