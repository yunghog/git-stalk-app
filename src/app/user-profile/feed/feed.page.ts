import { Component, OnInit } from '@angular/core';
import { UserProfileService } from  '../user-profile.service'
import { FeedService } from  './feed.service'
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss','../../app.component.scss'],
})
export class FeedPage implements OnInit {
  feeds=[];
  username=""
  userProfile={}
  constructor(private store: Storage,
              private ar: ActivatedRoute,
              private fs: FeedService,
              private us: UserProfileService) { }

  ngOnInit() {
          this.fs.getFeed(this.us.watchUsername).subscribe(res=>{
          this.username=this.us.watchUsername;
          this.feeds=res;
        })
  }

}
