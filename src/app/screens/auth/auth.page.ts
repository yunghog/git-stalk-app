import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarType } from 'src/app/interfaces/enums.model';
import { AuthService } from 'src/app/services/auth.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

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
  user = {
    name: '',
    username: '',
    id: '',
    email: '',
  };
  constructor(private as: AuthService, private router: Router, private sb: SnackbarService) {}

  ngOnInit() {}
  async onLogin(data: NgForm) {
    await this.as
      .SignIn(data.value.email, data.value.password)
      .then((res) => {
        this.user = {
          name: res.user.displayName,
          email: res.user.email,
          id: res.user.uid,
          username: res.additionalUserInfo.username,
        };
        if (res.user.emailVerified) {
          this.as.userLogin(this.user);
          this.router.navigateByUrl('/home');
        } else {
          this.sb.open('Error', SnackbarType.ERROR);
        }
      })
      .catch((error) => {
        this.sb.open('Error', SnackbarType.ERROR);
      });
  }
  signinWithGithub() {
    this.as.SigninGithub().then((res) => {
      console.log(res);
    });
  }
}
