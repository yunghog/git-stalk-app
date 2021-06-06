import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Storage } from  '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private menu: MenuController,
              private storage: Storage,
              private router: Router) {}

  ngOnInit(){
    this.storage.create();
  }

  openFirst() {
  this.menu.enable(true, 'first');
  this.menu.open('first');
  }
  clear(){
    this.storage.set('curUser',null);
    this.router.navigateByUrl('/login');
  }
}
