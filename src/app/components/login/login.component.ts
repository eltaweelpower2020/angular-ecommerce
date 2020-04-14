import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {
  errors:string;
  constructor(private router:Router,private afs:AuthService) { }
  dataEmail:string ;
  ngOnInit(): void {
    // console.log('onInit',this.dataEmail)
  }

  login(f){
    let data=f.value;
    this.afs.login(data.email,data.password)
    .then(()=>{
      this.router.navigate(['/'])
    })
    .catch((error)=> this.errors = error.message)
    this.dataEmail=data.email
    // console.log(this.dataEmail)
    // console.log(data.email)

  }

}
