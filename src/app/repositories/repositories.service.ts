import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor(private http: HttpClient) { }

  getRepo(username: String,reponame: String){
    let url = "https://api.github.com/repos/"+username+'/'+reponame.replace(' ','');
    return this.http.get(url);
  }
  getContributors(username: String,reponame: String){
    let url = "https://api.github.com/repos/"+username+'/'+reponame+'/contributors'.replace(' ','');
    return this.http.get<any[]>(url);
  }
  getCommits(username: String,reponame: String){
    let url = "https://api.github.com/repos/"+username+'/'+reponame+'/commits'.replace(' ','');
    return this.http.get<any[]>(url);
  }
}
