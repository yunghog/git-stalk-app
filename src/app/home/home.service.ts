import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repos } from './repos.model'
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getRes(){
    return this.http.get("https://api.github.com/users/yunghog")
  }
  getUser(username: String){
    let url = "https://api.github.com/users/"+username;
    return this.http.get(url);
  }
  getRepos(){
    return this.http.get<Repos[]>("https://api.github.com/users/yunghog/repos")
  }
}
