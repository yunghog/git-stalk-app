import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  constructor() {}

  ngOnInit() {}
  onLogin(data: NgForm) {
    console.log(data.value);
  }
  log(event: string = 'asd') {
    console.log(event);
  }
}
