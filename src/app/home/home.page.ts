import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss','../app.component.scss'],
})
export class HomePage implements OnInit{
  user={};
  following=[];
  feeds=[];
  d = Date();
  d1= new Date();
  today_ref= this.getTodayRef();
  today=this.d.split(' ').slice(0,4).join(" ");
  slideOpts = {
      slidesPerView: this.checkScreen()
  }
  isUpdateAvailable={}
  checkScreen(){
    return(window.innerWidth/80);
  }
  constructor(private hs: HomeService,
              private store: Storage) {}

  ngOnInit(){
    this.hs.checkUpdates().subscribe(res=>{
      this.isUpdateAvailable=res;
    })
    this.store.get('curUser').then(val=>{
        let username = val;
        this.hs.getUser(username).subscribe(res=>{
          this.user=res;
        });
        this.hs.getFeed(username).subscribe(res=>{
          this.feeds=res;
        });
        this.hs.getFollowing(username).subscribe(res=>{
          this.following=res;
        });
    })
  }
  getTodayRef(){
    let m = this.d1.getMonth()+1;
    let d = this.d1.getDate();
    let mon = "";
    let date = "";
    m<10?mon='0'+m:mon=m+'';
    d<10?date='0'+d:date=d+'';
    return(mon+'-'+date);
  }
}
