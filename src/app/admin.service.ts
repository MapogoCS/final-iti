import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { AdminData } from './adminData';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _HttpClient: HttpClient) { }
  AdminData = new BehaviorSubject(null);
  addUser(data: any): Observable<any> {
    console.log(data);
    return this._HttpClient.post(
      'https://furniture-eg.herokuapp.com/api/adminuser/store',
      data
    ); //wating api
  }

  addCategory(data: any): Observable<any> {
    return this._HttpClient.post(
      'https://furniture-eg.herokuapp.com/api/category/store',
      data
    ); //wating api
  }

  addSubCategory(data: any): Observable<any> {
    return this._HttpClient.post(
      'https://furniture-eg.herokuapp.com/api/category/sub/store',
      data
    ); //wating api
  }

  addProduct(data: any): Observable<any> {
    return this._HttpClient.post(
      'https://furniture-eg.herokuapp.com/api/product/store',
      data
    ); //wating api
  }

  addSlider(data: any): Observable<any> {
    return this._HttpClient.post(
      'https://furniture-eg.herokuapp.com/api/slider/store',
      data
    ); //wating api
  }

  getAllUsers(): Observable<any> {
    return this._HttpClient
      .get<any>('https://furniture-eg.herokuapp.com/api/adminuser/all');
  }

  getAllCategories(): Observable<any> {
    return this._HttpClient
      .get<any>('https://furniture-eg.herokuapp.com/api/category/view');
  }

  getAllSubCategories(): Observable<any> {
    return this._HttpClient
      .get<any>('https://furniture-eg.herokuapp.com/api/category/sub/view');
  }

  getAllSubCategoriesbyCat(category_id:any): Observable<any> {
    return this._HttpClient
      .get<any>(`https://furniture-eg.herokuapp.com/api/category/catsub/view/${category_id}`);
  }

  getSlider(): Observable<any> {
    return this._HttpClient
      .get<any>('https://furniture-eg.herokuapp.com/api/slider/view');
  }
}
