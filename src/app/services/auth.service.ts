import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userR:Observable<firebase.User>
  userId:string='';

  constructor(private afAuth:AngularFireAuth) {
    this.userR = afAuth.user

  }

  signup(email,password){
    return this.afAuth.createUserWithEmailAndPassword(email,password)
  }

  login(email,password){

    return this.afAuth.signInWithEmailAndPassword(email,password)
  }

  logout(){
    return this.afAuth.signOut()
  }



}
