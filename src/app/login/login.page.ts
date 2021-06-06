import { Component, OnInit } from '@angular/core';
import { Storage } from  '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss','../app.component.scss'],
})
export class LoginPage implements OnInit {
  inUsername = "";
  constructor(private store: Storage,
              private router: Router) { }

  ngOnInit() {
    this.store.get('curUser').then(val=>{
      if(val!=null){
        this.router.navigateByUrl('/user-profile');
      }
    })
  }
  onConfigure(){
    let username=this.inUsername;
    this.store.set('curUser',username);
    this.router.navigateByUrl('/user-profile');
  }
}
