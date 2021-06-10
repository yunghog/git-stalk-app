import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositoriesService } from './repositories.service';
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.page.html',
  styleUrls: ['./repositories.page.scss','../app.component.scss'],
})
export class RepositoriesPage implements OnInit {
  username=""
  repository=""
  repositoryDetails={}
  owner={}
  source={}
  contributors=[]
  commits=[]
  constructor(private ar: ActivatedRoute,
              private rs: RepositoriesService) { }

  ngOnInit() {
      this.ar.paramMap.subscribe(paramMap=>{
      this.username=paramMap.get('username');
      this.repository=paramMap.get('repository');
      })
      this.rs.getRepo(this.username,this.repository).subscribe(val=>{
        this.repositoryDetails=val;
        this.owner=this.repositoryDetails['owner'];
        this.source=this.repositoryDetails['source'];
      })
      this.rs.getContributors(this.username,this.repository).subscribe(v=>{
        this.contributors=v;
      })

      this.rs.getCommits(this.username,this.repository).subscribe(v=>{
        this.commits=v;
        if(this.commits.length>10)
          this.commits=this.commits.slice(0,10);
      },err=>{
        console.log(err);

      })
    }
    addToFav(url: String){
      console.log(url);
    }
  }
