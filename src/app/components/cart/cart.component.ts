import { Component, OnInit } from '@angular/core';
import { CartService } from "src/app/services/cart.service";

interface Good {name?:string,price?:number,photoUrl?:string,amount?:number,id?:string}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartShopping:Good[]=[];

  constructor(private cs:CartService) { }

  ngOnInit(): void {
    this.cs.getAllCart().subscribe(
      (cart)=>{
        this.cartShopping=cart.map(shopping =>{
          let id=shopping.payload.doc.id
          let data =shopping.payload.doc.data() as Good
          return {id,...data}
        })
        console.log(this.cartShopping)
      }
    )
  }

  delete(i){
    this.cs.delete(this.cartShopping[i].id)
    console.log(i)
  }

  save(amount,i){
    this.cs.update(amount,this.cartShopping[i].id)
  }

}
