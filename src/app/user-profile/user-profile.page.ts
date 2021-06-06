import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfileService } from  './user-profile.service'
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  username="";
  userProfile={};
  constructor(private store: Storage,
              private ar: ActivatedRoute,
              private us: UserProfileService) { }

  ngOnInit() {
    this.ar.paramMap.subscribe(paramMap=>{
    const username=paramMap.get('username');
    if(username===null){
      this.store.get('curUser').then(val=>{
        this.username=val;
        this.us.getUser(this.username).subscribe(res=>{
          this.userProfile=res;
        })
      })
    }
    else{
      this.username=username;
      this.us.getUser(this.username).subscribe(res=>{
        this.userProfile=res;
      })
    }
    })
  }
  clearStorage(){
    this.store.clear();
  }
}
