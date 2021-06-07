import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor(private http: HttpClient) { }

  getRepos(username: String){
    let url = "https://api.github.com/users/"+username+"/repos".replace(' ','');
    return this.http.get<any[]>(url);
  }

}
