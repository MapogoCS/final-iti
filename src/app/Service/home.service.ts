import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private _HttpClient: HttpClient) {}

  getAllCategories(): Observable<any> {
    return this._HttpClient.get<any>('https://furniture-eg.herokuapp.com/api/category/view');
  }

  getCategoryProducts(id: any): Observable<any> {
    return this._HttpClient.get<any>(
      `https://furniture-eg.herokuapp.com/api/category/${id}`
    );
  }

  getAllProduct(): any {
    return this._HttpClient.get<any>('https://furniture-eg.herokuapp.com/api/product/view');
  }

  getSlider(): Observable<any> {
    return this._HttpClient.get<any>('https://furniture-eg.herokuapp.com/api/slider/view');
  }
}
