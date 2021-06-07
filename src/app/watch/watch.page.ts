import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-watch',
  templateUrl: './watch.page.html',
  styleUrls: ['./watch.page.scss','../app.component.scss'],
})
export class WatchPage implements OnInit {
  username=""
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onWatch(){
    let url = "/user-profile/"+this.username;
    this.router.navigateByUrl(url);
  }
}
