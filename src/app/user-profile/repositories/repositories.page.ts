import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfileService } from  '../user-profile.service'
import { RepositoriesService } from  './repositories.service'
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
    if(this.us.watchUsername===""){
      this.store.get('curUser').then(val=>{
        this.username=val;
        this.us.getUser(this.username).subscribe(res=>{
          this.userProfile=res;
        })
        this.rs.getRepos(this.username).subscribe(res=>{
          this.repos=res;
        })
      })
    }
    else{
      this.us.getUser(this.us.watchUsername).subscribe(res=>{
        this.userProfile=res;
      })
      this.rs.getRepos(this.us.watchUsername).subscribe(res=>{
        this.repos=res;
      })
    }
  }
}
