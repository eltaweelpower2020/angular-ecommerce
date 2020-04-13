import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from "src/app/components/account/account.component";
import { CartComponent } from "src/app/components/cart/cart.component";
import { GoodsComponent } from "src/app/components/goods/goods.component";
import { HomeComponent } from "src/app/components/home/home.component";
import { LoginComponent } from "src/app/components/login/login.component";
import { OrdersComponent } from "src/app/components/orders/orders.component";
import { SignupComponent } from "src/app/components/signup/signup.component";
import { PagenotfoundComponent } from "src/app/components/pagenotfound/pagenotfound.component";



const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'cart',component:CartComponent},
  {path:'admin',component:GoodsComponent},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
