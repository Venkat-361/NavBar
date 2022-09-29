import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  baseURL = 'https://bookcart.azurewebsites.net/api';
  constructor(private http: HttpClient) { }

  addToWistList(): Observable<any>{
    //let userId = sessionStorage.getItem('userId')
    let userId = 1149;
    let bookId=5;
    return this.http.post<any>(`https://bookcart.azurewebsites.net/api/Wishlist/ToggleWishlist/${userId}/${bookId}`, {});
  }

  wishList(): Observable<any>{
    let userId=1149;
    return this.http.get<any>(this.baseURL+'/Wishlist/'+userId);
  }
  removewishListItem(): Observable<any>{
    let userId=1149;
    return this.http.delete<any>(this.baseURL+'/Wishlist/'+userId);
  }
}
