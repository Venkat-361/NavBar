import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './Components/book/book.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { MyordersComponent } from './Components/myorders/myorders.component';
import { ShopingcartComponent } from './Components/shopingcart/shopingcart.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';


const routes: Routes = [
  {path:'BookCart', component: BookComponent},
  {path:'wishlist', component: WishlistComponent},
  {path:'user', component: BookComponent},
  {path:'shopping_cart', component: ShopingcartComponent},
  {path:'MyOrders', component: MyordersComponent},
  {path:'LogOut', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
