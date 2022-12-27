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

  ngOnInit() {
    if (this.as.isLoggedin()) this.router.navigateByUrl('home');
  }
  async onLogin(data: NgForm) {
    if (data.valid) {
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
            this.as.SendVerificationMail();
            this.sb.open('User has not verified. Please check your mail', SnackbarType.INFO);
          }
        })
        .catch((error) => {
          this.sb.open(this.as.errorMessage(error['code']), SnackbarType.ERROR);
        });
    } else {
      this.sb.open('Please enter valid email id and password', SnackbarType.INFO);
    }
  }
  signinWithGithub() {
    this.as
      .SigninGithub()
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
          this.as.SendVerificationMail();
          this.sb.open('User has not verified. Please check your mail', SnackbarType.INFO);
        }
      })
      .catch((error) => {
        this.sb.open(this.as.errorMessage(error['code']), SnackbarType.ERROR);
      });
  }
}
