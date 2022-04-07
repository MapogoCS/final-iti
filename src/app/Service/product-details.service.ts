import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  constructor(private http: HttpClient) {}
  getProductByID(id: any): Observable<any> {
    return this.http.get<any>(`https://furniture-eg.herokuapp.com/api/product/show/${id}`);
  }

  addProductRating(data: any,id:any): Observable<any> {
    return this.http.post(
      `https://furniture-eg.herokuapp.com/api/rate/product/${id}`,
      data
    ); //wating api
  }
  
  deleteRating(queryParams:any,id: any): Observable<any> {
    return this.http.delete(`https://furniture-eg.herokuapp.com/api/rate/delete/${id}`,{params:queryParams});
  }

  getUserRating(queryParams:any,id: any): Observable<any> {
    return this.http.get(`https://furniture-eg.herokuapp.com/api/user/rate/${id}`,{params:queryParams});
  }
}
