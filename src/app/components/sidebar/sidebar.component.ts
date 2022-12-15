import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private menu: MenuController, private storage: Storage, private router: Router) {}

  ngOnInit() {}
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  clear() {
    this.storage.set('curUser', null);
    this.router.navigateByUrl('/login');
    this.closeMenu();
  }
  closeMenu() {
    this.menu.close('first');
  }
}
