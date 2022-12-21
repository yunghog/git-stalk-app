import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignupMethod } from 'src/app/interfaces/enums.model';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {
  method: SignupMethod;
  signupMethod = SignupMethod;
  constructor(private ar: ActivatedRoute) {}

  ngOnInit() {
    this.ar.params.subscribe((res) => {
      this.method = res['method'];
    });
  }
}
