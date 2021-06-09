import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss','../app.component.scss'],
})
export class SignupPage implements OnInit {
  name="";
  username="";
  email="";
  password="";
  passwordre="";
  passMatch=true;
  userExist=true;
  constructor(private router: Router,
              private ss: SignupService) { }

  ngOnInit() {
  }
  onSignup(data){
    if(data.password!==data.passwordre){
      this.passMatch=false;
    }
    if(data.password===data.passwordre){
      this.passMatch=true;
    }
    this.ss.getUser(data.username).subscribe((val)=>{
      this.userExist=true;
        let user = {
          "name": data.name,
          "username": data.username,
          "password": data.password,
          "email": data.email
        }
        this.ss.signUp(user);
        this.router.navigateByUrl('/signup/signup-success');

    },(err)=>{
      if(err.error.message==="Not Found"){
        this.userExist=false;
      }
    });
  }
}
