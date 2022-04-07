import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _HttpClient: HttpClient) { }

  addToWishlist(data: any,id:any): Observable<any> {
    return this._HttpClient.post(
      `https://furniture-eg.herokuapp.com/api/user/wishlist/add/${id}`,
      data
    ); //wating api
  }

  deleteFromWishlist(queryParams:any,id: any): Observable<any> {
    return this._HttpClient.delete(`https://furniture-eg.herokuapp.com/api/user/wishlist-remove/${id}`,{params:queryParams});
  }

  getWishlistProducts(queryParams:any): Observable<any> {
    return this._HttpClient.get(`https://furniture-eg.herokuapp.com/api/user/get-wishlist-product`,{params:queryParams});
  }
}
