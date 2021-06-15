import { Component, OnInit } from '@angular/core';
import { NewUpdateService } from './new-update.service';
@Component({
  selector: 'app-new-update',
  templateUrl: './new-update.page.html',
  styleUrls: ['./new-update.page.scss','../app.component.scss'],
})
export class NewUpdatePage implements OnInit {
  isUpdateAvailable={}
  constructor(private ns: NewUpdateService) { }

  ngOnInit() {
    this.ns.checkUpdates().subscribe(res=>{
      this.isUpdateAvailable=res;
    })
  }

}
