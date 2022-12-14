import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getFollowing(username: String) {
    let url = `https://api.github.com/users/${username}/following`.replace(' ', '');
    return this.http.get<any[]>(url);
  }
}
