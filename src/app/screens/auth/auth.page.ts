import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  loginData = {
    email: '',
    password: '',
  };
  constructor(private as: AuthService) {}

  ngOnInit() {}
  onLogin(data: NgForm) {
    this.as.SignIn(data.value.email, data.value.password).then((res) => {
      console.log(res);
    });
  }
  signinWithGithub() {
    this.as.SigninGithub().then((res) => {
      console.log(res);
    });
  }
}
