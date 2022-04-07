import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductListService implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  //
  getAllProduct() {
    return this.http.get<any>('https://furniture-eg.herokuapp.com/api/product/view');
  }
  getProductBycategory(cat_id: any) {
    return this.http.get<any>(`https://furniture-eg.herokuapp.com/api/category/${cat_id}`);
  }
  getProductBySubcategory(subcat_id: any) {
    return this.http.get<any>(
      `https://furniture-eg.herokuapp.com/api/subcategory/${subcat_id}`
    );
  }
}
