import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  getUser(username: String){
    let url = "https://api.github.com/users/"+username;
    return this.http.get(url);
  }
  signUp(data){
    let url = "https://gitwatch-405ac-default-rtdb.asia-southeast1.firebasedatabase.app/users.json";
    let body = JSON.stringify(data);
    this.http.post(url,body).subscribe(res=>{
    });
  }
}
