import { Component, OnInit } from '@angular/core';
import { ShopingcartService } from 'src/app/Services/shopingcart.service';
import { SnackbarService } from 'src/app/Services/snackbar.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
	selector: 'app-wishlist',
	templateUrl: './wishlist.component.html',
	styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
	bookwistList: any = [];
	constructor(private wishListSerivce: WishlistService,
		private cartService: ShopingcartService,
		private snackBarService: SnackbarService
	) { }

	ngOnInit(): void {
		this.getwishListItems();
	}
	getwishListItems() {
		this.wishListSerivce.wishList().subscribe((data) => {
			console.log(data);
			this.bookwistList = data;
			console.log(this.bookwistList);
		});
	}
	removeWishList() {

		this.bookwistList = [];
		this.snackBarService.showSnackBar('Wishlist cleared!!!');

	}
	removewishListItem(i: number) {
		this.bookwistList.splice(i, 1);
		this.snackBarService.showSnackBar('Item removed Wishlist!!!');
	}
	addToCart() {
		console.log(this.bookwistList)
		this.snackBarService.showSnackBar('Item Added To ShopCart');
	}
}
