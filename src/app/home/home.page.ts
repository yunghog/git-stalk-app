import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  user={};
  repos=[];
  inUsername="";
  constructor(private hs: HomeService,
              private storage: Storage) {}

  ngOnInit(){

  }
  onGetUser(){
    let username = this.inUsername;
    this.hs.getUser(username).subscribe(res=>{
      console.log(res);
      this.user=res;
    });
  }
}
