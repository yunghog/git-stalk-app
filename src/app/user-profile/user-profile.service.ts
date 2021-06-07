import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  watchUsername=""
  constructor(private http: HttpClient) { }

  getUser(username: String){
    let url = "https://api.github.com/users/"+username;
    return this.http.get(url);
  }
  setUsername(username){
    this.watchUsername=username;
  }
}
