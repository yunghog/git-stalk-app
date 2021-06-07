import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfileService } from  './user-profile.service'
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss','../app.component.scss'],
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
    if(username!==null){
      this.us.setUsername(username);
    }
    })
  }
  clearStorage(){
    this.store.clear();
  }
}
