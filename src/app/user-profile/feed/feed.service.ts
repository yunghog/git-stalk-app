import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  getFeed(username: String){
    let url = "https://api.github.com/users/"+username+"/received_events".replace(' ','');
    return this.http.get<any[]>(url);
  }
}
