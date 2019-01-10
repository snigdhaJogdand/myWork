import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
userEmail;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userEmail=localStorage.getItem("GetTheEmail");
  }
  logout=function()
  {
    localStorage.removeItem("GetTheItem");
    localStorage.clear();
  }
}
