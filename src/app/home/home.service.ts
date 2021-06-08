import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repos } from './repos.model'
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getUser(username: String){
    let url = "https://api.github.com/users/"+username;
    return this.http.get(url);
  }
  getFeed(username: String){
    let url = "https://api.github.com/users/"+username+"/received_events".replace(' ','');
    return this.http.get<any[]>(url);
  }
  getFollowing(username: String){
    let url = "https://api.github.com/users/"+username+"/following".replace(' ','');
    return this.http.get<any[]>(url);
  }
}
