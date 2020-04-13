import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountComponent } from './components/account/account.component';
import { OrdersComponent } from './components/orders/orders.component';
import { GoodsComponent } from './components/goods/goods.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from "@angular/forms";
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';

// import { AngularFireAuthModule } from '@angular/fire/auth';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    AccountComponent,
    OrdersComponent,
    GoodsComponent,
    PagenotfoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBrKaM8WGVY8yWsNKFU_3FaYbG__chUjtk",
      authDomain: "evident-airline-250809.firebaseapp.com",
      databaseURL: "https://evident-airline-250809.firebaseio.com",
      projectId: "evident-airline-250809",
      storageBucket: "evident-airline-250809.appspot.com",
      messagingSenderId: "643767607933",
      appId: "1:643767607933:web:0125f42ba2af84ee208714",
      measurementId: "G-JZXN8G0LWD"
    }),
    AngularFirestoreModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
