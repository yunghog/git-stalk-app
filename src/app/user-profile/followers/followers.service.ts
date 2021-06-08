import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  constructor(private http: HttpClient) { }
  getFollowers(username: String){
    let url = "https://api.github.com/users/"+username+"/followers".replace(' ','');
    return this.http.get<any[]>(url);
  }

}
