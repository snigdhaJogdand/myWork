import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl , Validators} from '@angular/forms';
import { Http} from '@angular/http';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  constructor(private authService: AuthService) { }
forms;
  ngOnInit() { 
    this.forms=new FormGroup(
      {
        name: new FormControl("",Validators.required),
        username: new FormControl("",Validators.required)
      }
    );
   
    }
 
    onSubmit = function (user) {
     console.log(this.form);
     console.log(user);

      this.authService.insert(user).subscribe((data) => {
      console.log(data);
      if (data.status) {
        console.log("data is inserted !!!!");
      } else {
        console.log("there is some error !!!");
    }
    });

}
/*
this.authService.update(user).subscribe((data)=>
  {
    console.log(data);
    if(data.status)
    {
        console.log("data is as follows");
    }
    else
    {
      console.log("no data found");
    }
  });
*/
}
