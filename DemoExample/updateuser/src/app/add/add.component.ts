import { Component, OnInit } from '@angular/core';
import {Http, Headers, Response} from '@angular/http'; 

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private http:Http) { }
confirmationString:string="product added sucessfully !!!!";
issAdded:boolean=false;

  productObj:object={};
  addNewProduct=function(product)
  {
    this.projectObj={
      "name":product.name,
      "username":product.username
    }
    this.http.post( "http://localhost:7000/products",this.projectObj ).subscribe((res:Response)=>{
      console.log(res);
        this.isAdded=true;
    });
  };

  ngOnInit() {
  }

}
