import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/book.service';
import { ShopingcartService } from 'src/app/Services/shopingcart.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {
  cartItemList:any;
  booksList = [];
  total: any;
  wistList:any;
  constructor(private bookService: BookService,
    private wishListSerivce: WishlistService,
    private shopCart: ShopingcartService, ) { }
  ngOnInit(): void {
    this.getwishListItems();
  }
  getwishListItems(){
		this.wishListSerivce.wishList().subscribe((data) => {              
			console.log(data);
			this.total=data;
			console.log(this.total);
      console.log(this.total.length);
		});
}
getcartItems(){
  this.shopCart.getCartItemsByUserId().subscribe((data) => {              
    console.log(data);
    for(let i=0;i<data.length;i++){
      this.cartItemList.push(data[i].book);
    }
    console.log(this.cartItemList);
  });
}
}