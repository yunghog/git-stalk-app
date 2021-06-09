import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getEvents(username: String){
    let url = "https://api.github.com/users/"+username+"/events".replace(' ','');
    return this.http.get<any[]>(url);
  }
}
