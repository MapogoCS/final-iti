import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class profileUserService {

  constructor(private http: HttpClient) { }


  getthemoviedb() : any {
    return this.http.get<any>('https://furniture-eg.herokuapp.com/api/user/profile/{id}');
  }
  // getUserProfileByID(id: any) {
  //   this.http.get<any>(`https://furniture-eg.herokuapp.com/api/user/profile/${id}`);
  // }
}
