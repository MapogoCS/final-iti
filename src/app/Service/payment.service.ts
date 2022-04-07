import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _HttpClient: HttpClient) { }

  cashOnDelivery(data:any):Observable<any>{
    return this._HttpClient.post(
      `https://furniture-eg.herokuapp.com/api/cash/order`,
      data
    );
  }
  payByOtherMethods(data: any): Observable<any> {
    return this._HttpClient.post(
      `https://furniture-eg.herokuapp.com/api/pay`,
      data
    );
  }
  getAllUserOrders(email:any):Observable<any> {
    return this._HttpClient.get<any>(`https://furniture-eg.herokuapp.com/api/user/orders/${email}`);
  }
  deleteUserOrder(id:any):Observable<any>{
    return this._HttpClient.delete<any>(`https://furniture-eg.herokuapp.com/api/user/order/${id}`);
  }
  getOrderItems(order_id:any):Observable<any> {
    return this._HttpClient.get<any>(`https://furniture-eg.herokuapp.com/api/orders/details/${order_id}`);
  }
}
