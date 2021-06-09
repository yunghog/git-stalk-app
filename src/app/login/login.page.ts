import { Component, OnInit } from '@angular/core';
import { Storage } from  '@ionic/storage';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss','../app.component.scss'],
})
export class LoginPage implements OnInit {
  inUsername = "";
  inPassword = "";
  allUsers=[];
  userExist=true;
  constructor(private store: Storage,
              private ls: LoginService,
              private router: Router) { }

  ngOnInit() {
    this.store.get('curUser').then(val=>{
      if(val!=null){
        this.router.navigateByUrl('/home');
      }
    })
  }
  onConfigure(){
    let username=this.inUsername;
    this.store.set('curUser',username);
    this.router.navigateByUrl('/home');
  }
  onLogin(){
    this.ls.getAllUsers().subscribe(val=>{
      let allUsers=[];
      for(let key in val){
        allUsers.push({...val[key],id:key})
      }
      let user = allUsers.filter(x=>{return x.username===this.inUsername&&x.password===this.inPassword});
      if(user.length==0){
        this.userExist=false;
      }
      else{
        this.userExist=true;
        this.store.set('curUser',user[0].username);
        this.router.navigateByUrl('/home');
      }

    })
  }
}
