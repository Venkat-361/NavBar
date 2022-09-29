import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ShopingcartService {
  baseURL = 'https://bookcart.azurewebsites.net/api';
  cartItemCount = 0;
  constructor(private http: HttpClient) { }


  addToCart(): Observable<any>{
    //let userId = sessionStorage.getItem('userId')
    let userId = 1149;
    let bookId=5;
    return this.http.post<any>(`https://bookcart.azurewebsites.net/api/ShoppingCart/AddToCart/${userId}/${bookId}`, {});
  }
  // getCartItems(userId: number) {
  //   return this.http.get(this.baseURL + userId)
  //     .pipe(map((response: ShoppingCart[]) => {
  //       this.cartItemCount = response.length;
  //       return response;
  //     }));
  // }
  addBookToCart(){

  }

  getCartItemsByUserId(): Observable<any> {
    let userId=1149;
    return this.http.get<any>(this.baseURL+'/ShoppingCart/'+userId);
  }
  removeCartItems(): Observable<any>{
    let userId=1149;
    return this.http.delete<any>(this.baseURL+'/ShoppingCart/'+userId);
  }

}
