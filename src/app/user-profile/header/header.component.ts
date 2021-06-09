import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfileService } from  '../user-profile.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss','../../app.component.scss'],
})
export class HeaderComponent implements OnInit {
  userProfile={};
  constructor(private store: Storage,
              private ar: ActivatedRoute,
              private us: UserProfileService) { }

  ngOnInit() {
    this.us.getUser(this.us.watchUsername).subscribe(res=>{
      this.userProfile=res;
    })
  }
}
