import { Component, OnInit } from '@angular/core';
import { OrderrByPipePipe } from '../orderr-by-pipe.pipe'
@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {
  records: Array<any>;
  direction: number;
  isDesc: boolean = false;
  column: string = 'CategoryName';
  constructor() { }
  ngOnInit() {
    this.records= [
      { CategoryID: 1,  CategoryName: "Beverages", Description: "Coffees, teas" },
      { CategoryID: 2,  CategoryName: "Condiments", Description: "Sweet and savory sauces" },
      { CategoryID: 3,  CategoryName: "Confections", Description: "Desserts and candies" },
      { CategoryID: 4,  CategoryName: "Cheeses",  Description: "Smetana, Quark and Cheddar Cheese" },
      { CategoryID: 5,  CategoryName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal" },
      { CategoryID: 6,  CategoryName: "Beverages", Description: "Beers, and ales" },
      { CategoryID: 7,  CategoryName: "Condiments", Description: "Selishes, spreads, and seasonings" },
      { CategoryID: 8,  CategoryName: "Confections", Description: "Sweet breads" },
      { CategoryID: 9,  CategoryName: "Cheeses",  Description: "Cheese Burger" },
      { CategoryID: 10, CategoryName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal" }
     ];
     // this.sort(this.column);
  }
  sort(property){
    console.log("in sort function");
    this.isDesc = !this.isDesc;    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
}

}
