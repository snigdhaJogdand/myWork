import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Http} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl , Validators} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
g;
  constructor(private authService: AuthService) { }

  ngOnInit() {
   this.g=localStorage.getItem("GetTheEmail");
  }

  logout=function()
  {
    localStorage.removeItem("GetTheItem");
    localStorage.clear();
  }
}
