import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nsotable',
  templateUrl: './nsotable.component.html',
  styleUrls: ['./nsotable.component.css']
})
export class NsotableComponent implements OnInit {

  tittle="device list"
  deviceList;  
  constructor(private http:Http,private authService: AuthService, private router: Router) 
  {  }

  ngOnInit() 
  {
  this.authService.nsodevices().subscribe(data => {
    //console.log(data);
    if (data.status) {
      this.deviceList=data.data.results;
      //console.log(this.deviceList);
    } else {
     
    }
  });

  
   }

 

}
