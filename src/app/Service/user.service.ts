import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  upDateProfileUser(id: any, update: any): Observable<any> {
    return this.http
      .post(`https://furniture-eg.herokuapp.com/api/user/profile/update/${id}`, update);
  }
  upDatePasswordUser(id: any, update: any) {
    this.http
      .post(`https://furniture-eg.herokuapp.com/api/user/profile/update/{${id}}`, update)
      .subscribe((respons: any) => {
        console.log(respons);
      });
  }
  getUser() {
    return this.http.get<any>('https://furniture-eg.herokuapp.com/api/');
  }
  logoutUser() {
    return this.http.get<any>('https://furniture-eg.herokuapp.com/api/user/logout');
  }
  getProfileUser(id: any) {
    return this.http.get<any>(`https://furniture-eg.herokuapp.com/api/user/profile/${id}`);
  }
  getPasswordUser() {
    return this.http.get<any>('https://furniture-eg.herokuapp.com/api/user/password');
  }
}
