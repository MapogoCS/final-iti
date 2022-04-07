import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class contactUsService {
  constructor(public _HttpClient: HttpClient) {}

  registData(data: any): Observable<any> {
    return this._HttpClient.post(
      'https://furniture-eg.herokuapp.com/api/contactUs/add',
      data
    );
  }

  subscribeToUpdates(data: any): Observable<any> {
    return this._HttpClient.post(
      'https://furniture-eg.herokuapp.com/api/subscribe',
      data
    );
  }

  deleteSubscription(email: any): Observable<any> {
    return this._HttpClient.delete(`https://furniture-eg.herokuapp.com/api/unsubscribe/${email}`);
  }
}
