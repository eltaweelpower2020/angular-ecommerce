import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { AuthService } from "src/app/services/auth.service";
import { UserService } from "src/app/services/user.service";

export interface User {email?:string ,name?:string,address?:string ,password?:string}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router,private afs:AuthService,private us:UserService) { }
  errors:string;
  ngOnInit(): void {
  }
  signup(f){
    let data1:User =f.value;
    this.afs.signup(data1.email,data1.password)
    .then(data=> {
      // console.log(data1.email);
      // console.log(data1.address);
      // console.log(data1.name);
      // console.log(data1.password);
      let UID=data.user.uid;
      this.us.addNewUser(data1.email,data1.name,data1.address,data1.password,UID).then(()=>{
        this.router.navigate(['/'])
      })

    })
    .catch(error => this.errors=error.message)
    // console.log(f.value)
    // console.log(f.controls)
    // console.log(f)
  }

}
