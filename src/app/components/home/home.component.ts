import { Component, OnInit } from '@angular/core';
import { CartService } from "src/app/services/cart.service";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Good {name?:string,price?:number,photoUrl?:string}
interface GoodId extends Good { id: string; }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Good>;
  dataFromServer:Observable<GoodId[]>;
  add:number=-1;

  constructor(private afs: AngularFirestore,private cart:CartService) {
    this.itemsCollection = afs.collection<Good>('good');
    this.dataFromServer = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Good;
         const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )}

  ngOnInit(): void {}
  addToCart(id,index){
   this.add=index;

  }
  buy(amount:number){
    this.dataFromServer.subscribe(data => {
      let selectedGood=data[this.add];
      let data000={
        name:selectedGood.name,
        price:selectedGood.price,
        photoUrl:selectedGood.photoUrl,
        amount:amount
      }
      console.log(data000);
      this.cart.addToCart(data000)
      .then(()=> this.add=-1)
      .catch((error)=> console.log(error))

    })
  }

}
