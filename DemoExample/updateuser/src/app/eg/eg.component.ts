import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-eg',
  templateUrl: './eg.component.html',
  styleUrls: ['./eg.component.css']
})
export class EgComponent implements OnInit {

  constructor(private http:Http){ }
     
    products=[];
   fetchData= function()
   {
     this.http.get("http://localhost:7000/products").subscribe(
       
       (res:Response)=>{ this.products=res.json(); }
     )
   }

   update( user, username )
   {
     
   }


  ngOnInit() {
    this.fetchData();
  }

}
