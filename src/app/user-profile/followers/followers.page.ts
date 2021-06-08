import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfileService } from  '../user-profile.service'
import { FollowersService } from  './followers.service'
@Component({
  selector: 'app-followers',
  templateUrl: './followers.page.html',
  styleUrls: ['./followers.page.scss','../../app.component.scss'],
})
export class FollowersPage implements OnInit {
  username=""
  userProfile={}
  followers=[]
  constructor(private store: Storage,
              private ar: ActivatedRoute,
              private fs: FollowersService,
              private us: UserProfileService) { }

  ngOnInit() {
    if(this.us.watchUsername===""){
      this.store.get('curUser').then(val=>{
        this.username=val;
        this.us.getUser(this.username).subscribe(res=>{
          this.userProfile=res;
        })
        this.fs.getFollowers(this.username).subscribe(res=>{
          this.followers=res;
        })
      })
    }
    else{
      this.us.getUser(this.us.watchUsername).subscribe(res=>{
        this.userProfile=res;
      })
      this.fs.getFollowers(this.us.watchUsername).subscribe(res=>{
        this.followers=res;
      })
    }
  }

}
