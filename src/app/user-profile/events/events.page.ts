import { Component, OnInit } from '@angular/core';
import { UserProfileService } from  '../user-profile.service'
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from './events.service'
@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss','../../app.component.scss'],
})
export class EventsPage implements OnInit {
  events=[];
  username=""
  constructor(private store: Storage,
              private ar: ActivatedRoute,
              private es: EventsService,
              private us: UserProfileService) { }

  ngOnInit() {
    this.es.getEvents(this.us.watchUsername).subscribe(res=>{
    this.username=this.us.watchUsername;
    this.events=res;
  })
  }

}
