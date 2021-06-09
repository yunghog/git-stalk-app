import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupSuccessPageRoutingModule } from './signup-success-routing.module';

import { SignupSuccessPage } from './signup-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupSuccessPageRoutingModule
  ],
  declarations: [SignupSuccessPage]
})
export class SignupSuccessPageModule {}
