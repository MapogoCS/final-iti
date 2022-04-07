import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class adminservice {
  constructor(private http: HttpClient) {}

  MessagesArray: any[] = [];
  getAllCategory(): any {
    return this.http.get<any>('https://furniture-eg.herokuapp.com/api/category/view');
  }
  deleteCategory(id: any): Observable<any> {
    return this.http.delete(`https://furniture-eg.herokuapp.com/api/category/delete/${id}`);
  }

  editCategory(id: any): Observable<any> {
    return this.http.get(`https://furniture-eg.herokuapp.com/api/category/edit/${id}`);
  }
  updateCategry(id: any, postProduct: any): Observable<any> {
    return this.http.post(
      `https://furniture-eg.herokuapp.com/api/category/update/${id}`,
      postProduct
    );
  }

  getAllProduct(): any {
    return this.http.get<any>('https://furniture-eg.herokuapp.com/api/product/view');
  }
  deleteProduct(id: any): Observable<any> {
    return this.http.delete(`https://furniture-eg.herokuapp.com/api/product/delete/${id}`);
  }

  addProduct(addProduct: any) {
    this.http.post('https://furniture-eg.herokuapp.com/api/product/store', addProduct);
  }
  find(id: any): Observable<any> {
    return this.http.get(`https://furniture-eg.herokuapp.com/api/product/edit/${id}`);
  }

  updateProduct(id: any, postProduct: any): Observable<any> {
    return this.http.post(
      `https://furniture-eg.herokuapp.com/api/product/update/${id}`,
      postProduct
    );
  }

  getAllSubCat(): any {
    return this.http.get<any>('https://furniture-eg.herokuapp.com/api/category/sub/view');
  }

  deleteSubCat(id: any): Observable<any> {
    return this.http.delete(
      `https://furniture-eg.herokuapp.com/api/category/sub/delete/${id}`
    );
  }
  editSubCategory(id: any): Observable<any> {
    return this.http.get(`https://furniture-eg.herokuapp.com/api/category/sub/edit/${id}`);
  }
  updateSubCategry(id: any, postProduct: any): Observable<any> {
    return this.http.post(
      `https://furniture-eg.herokuapp.com/api/category/sub/update/${id}`,
      postProduct
    );
  }
  messagesHasBeenChanged = new BehaviorSubject<any>([]);
  getAllContactUsMessages(): any {
    return this.http.get<any>('https://furniture-eg.herokuapp.com/api/contactUs').subscribe({
      next: (res) => {
        this.MessagesArray = res.ALLContactUs;
        this.messagesHasBeenChanged.next(this.MessagesArray);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  }
  setMessage(arr: any) {
    this.MessagesArray = arr;
    this.messagesHasBeenChanged.next(this.MessagesArray);
  }

  getContactUsMessageByID(id: any): Observable<any> {
    return this.http.get<any>(`https://furniture-eg.herokuapp.com/api/contactUs/${id}`);
  }
  deleteContactUsMessage(id: any) {
    this.http
      .delete(`https://furniture-eg.herokuapp.com/api/contactUs/delete/${id}`)
      .subscribe((res: any) => {
        this.MessagesArray = this.MessagesArray.filter(
          (item) => item.id !== id
        );
        this.messagesHasBeenChanged.next(this.MessagesArray);
      });
  }
  sendMasseage() {
    this.messagesHasBeenChanged.next(this.MessagesArray);
    return this.MessagesArray;
  }
  deleteUserAcount(id: any): Observable<any> {
    return this.http.delete(`https://furniture-eg.herokuapp.com/api/adminuser/delete/${id}`);
  }
  deleteSlider(id: any): Observable<any> {
    return this.http.get(`https://furniture-eg.herokuapp.com/api/slider/delete/${id}`);
  }

  getAllOrdes(): any {
    return this.http.get<any>('https://furniture-eg.herokuapp.com/api/user/orders/list');
  }
  getOrdersDetails(id: any): any {
    return this.http.get<any>(`https://furniture-eg.herokuapp.com/api/orders/details/${id}`);
  }
}
