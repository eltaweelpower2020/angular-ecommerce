import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import { Router } from '@angular/router';
import {UserService}from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isUser:boolean=false;


  constructor(private us:AuthService,private router:Router,private userrr:UserService) { }

  ngOnInit(): void {
    // console.log (this.emaildataaa)
    this.us.userR.subscribe((userYa)=> {
      if (userYa) {
        this.isUser=true
        this.us.userId=userYa.uid

      }
      else {
        this.isUser=false;
        this.us.userId='';
      }
    })
  }

  logout(){
    this.us.logout()
    .then(()=>{
      this.router.navigate(['/'])
      console.log("logout done")
    })
    .catch((error)=>console.log(error))
  }

}
