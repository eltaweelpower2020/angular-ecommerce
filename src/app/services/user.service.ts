import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface User {email?:string ,name?:string,address?:string ,password?:string,id?:string}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private itemsCollection: AngularFirestoreCollection<User>;
  dataFromServer:Observable<User[]>;

  constructor(private afs: AngularFirestore) { }
  addNewUser(email,name,address,password,id){
    return  this.afs.doc('users/'+id).set({
      email,
      name,
      address,
      password
    })
  }

}
