import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'
@Component({
  selector: 'app-signup-success',
  templateUrl: './signup-success.page.html',
  styleUrls: ['./signup-success.page.scss','../../app.component.scss'],
})
export class SignupSuccessPage implements OnInit {

  constructor(private ac: AlertController,
              private router: Router) { }

  ngOnInit() {
    this.showLoading();
    setTimeout(() => {
      this.router.navigateByUrl('/login');
    }, 2000);
  }
  showLoading(){
    const alert = this.ac.create({
      header: 'Signup Successful',
      message: 'Redirecting to login screen...',
      mode: "ios"
    }).then(load=>{
      load.present();
      setTimeout(() => {
        load.dismiss();
      }, 2000);
    });
  }
}
