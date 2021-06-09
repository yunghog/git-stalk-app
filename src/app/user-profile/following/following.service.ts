import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FollowingService {

  constructor(private http: HttpClient) { }
  getFollowing(username: String){
    let url = "https://api.github.com/users/"+username+"/following".replace(' ','');
    return this.http.get<any[]>(url);
  }

}
