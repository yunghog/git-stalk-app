import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInMethod, User } from 'firebase/auth';
import { SignupMethod, SIGNUP_STEPS } from 'src/app/interfaces/enums.model';
import { AuthService, SignupData } from 'src/app/services/auth.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupData: SignupData = {
    name: '',
    username: '',
    password: '',
    email: '',
  };
  steps = [SIGNUP_STEPS.EMAIL, SIGNUP_STEPS.VERIFICATION, SIGNUP_STEPS.DETAILS, SIGNUP_STEPS.SUCCESS];
  step: SIGNUP_STEPS = SIGNUP_STEPS.EMAIL;
  rePassword: string = '';
  constructor(private router: Router, private as: AuthService, private ss: SnackbarService) {}

  ngOnInit() {}

  nextStep() {
    let index = this.steps.indexOf(this.step);
    if (index < 3) this.step = this.steps[index + 1];
  }

  prevStep() {
    let index = this.steps.indexOf(this.step);
    if (index > 0) this.step = this.steps[index - 1];
    else this.router.navigateByUrl('/auth/login');
  }

  sendVerificationMail() {
    if (this.signupData.email && this.signupData.password && this.signupData.username && this.signupData.name) {
      this.as
        .SignUp(this.signupData)
        .then((res) => {
          this.as.SendVerificationMail();
          this.as.addUser(this.signupData, res.user.uid);
          this.router.navigateByUrl('/auth/success/' + SignupMethod.EMAIL);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
    }
  }

  signupWithGithub() {
    this.as
      .SignupGithub()
      .then((res) => {
        this.signupData = {
          ...this.signupData,
          name: res.user.displayName,
          username: res.additionalUserInfo.username,
          email: res.user.email,
        };
        this.as.addUser(this.signupData, res.user.uid);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
