import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfileService } from  '../user-profile.service'
import { FollowingService } from  './following.service'
@Component({
  selector: 'app-following',
  templateUrl: './following.page.html',
  styleUrls: ['./following.page.scss','../../app.component.scss'],
})
export class FollowingPage implements OnInit {
  following=[]
  username=""
  constructor(private ar: ActivatedRoute,
              private fs: FollowingService,
              private us: UserProfileService) { }

  ngOnInit() {
    this.fs.getFollowing(this.us.watchUsername).subscribe(res=>{
      this.username=this.us.watchUsername;
      this.following=res;
    })
  }

}
