import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  @ViewChild('image') image:ElementRef



  constructor(private storage:AngularFireStorage,private fs:AngularFirestore,private router:Router) { }

  ngOnInit(): void {

  }
  addNewGood(form:NgForm){
    let goodData=form.value;
    let name=goodData.name;
    let price=goodData.price;
    let image=(this.image.nativeElement as HTMLInputElement).files[0];
    let ref =this.storage.ref('good/'+image.name);
    ref.put(image).then(()=>{
      ref.getDownloadURL().subscribe(photoUrl=>{
        this.fs.collection('good').add({
          name:name,
          price:price,
          photoUrl:photoUrl
        })
      })
      this.router.navigate(['/'])
    })


    // console.log((this.image.nativeElement as HTMLInputElement).files[0])
    // console.log(goodData)
  }

}
