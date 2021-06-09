import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    let url = "https://gitwatch-405ac-default-rtdb.asia-southeast1.firebasedatabase.app/users.json";
    return this.http.get<any[]>(url);
  }
}
