import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewUpdateService {

  constructor(private http: HttpClient) { }

  checkUpdates(){
    const thisVersion = "release2";
    const url = "https://gitwatch-405ac-default-rtdb.asia-southeast1.firebasedatabase.app/updates/"+thisVersion+".json";
    return this.http.get(url);
  }
}
