import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfileService } from  '../user-profile.service'
import { RepositoriesService } from  './repositories.service';
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.page.html',
  styleUrls: ['./repositories.page.scss','../../app.component.scss'],
})
export class RepositoriesPage implements OnInit {

  username="";
  userProfile={};
  repos=[];
  constructor(private store: Storage,
              private ar: ActivatedRoute,
              private rs: RepositoriesService,
              private us: UserProfileService) { }


  ngOnInit() {
      this.rs.getRepos(this.us.watchUsername).subscribe(res=>{
        this.username=this.us.watchUsername;
        this.repos=res;
      })
  }
}
