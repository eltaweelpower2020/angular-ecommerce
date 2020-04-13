import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from "src/app/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs:AngularFirestore,private as:AuthService) { }

  addToCart(data){
    console.log(this.as.userId)
    return this.fs.collection(`users/${this.as.userId}/cart`).add(data)
  }

  getAllCart(){
    return this.fs.collection(`users/${this.as.userId}/cart`).snapshotChanges()
  }

  delete(id){
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).delete();
  }
  update(amount,id){
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).update({amount:amount})
  }
}
