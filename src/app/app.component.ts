import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Storage } from  '@ionic/storage';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private menu: MenuController,
              private storage: Storage) {}

  ngOnInit(){
    this.storage.create();
  }

  openFirst() {
  this.menu.enable(true, 'first');
  this.menu.open('first');
  }
}
