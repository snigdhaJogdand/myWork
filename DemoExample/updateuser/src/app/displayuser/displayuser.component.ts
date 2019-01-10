import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Http} from '@angular/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl , Validators} from '@angular/forms';
@Component({
  selector: 'app-displayuser',
  templateUrl: './displayuser.component.html',
  styleUrls: ['./displayuser.component.css']
})

export class DisplayuserComponent implements OnInit {
  user1:string;
  user2:string;
  name;
  constructor(private authService: AuthService) {  }
 forms;
 abc={
  name:"",
	username:""
};  
 
  ngOnInit() { 
     this.forms=new FormGroup(
      {
        user: new FormControl("",Validators.required),
        username: new FormControl("",Validators.required)
      }
    );
  } 
      onSubmit = function (form) {
        console.log(form);
        console.log("display the details of all user !!!");
         this.authService.display(form).subscribe((data)=>{
        // console.log("data is : "+data);
        // console.log(data.message);
    // data=form.name;
     console.log(data);
        console.log(data.status);
         if (data.status) {
        console.log("hey");
        //this.profileObj=data.u;
        //console.log(this.profileObj);

       }
          else{
            console.log("error")
          }
         
     
         
      });
      }
}
