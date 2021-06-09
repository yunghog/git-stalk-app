import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupSuccessPage } from './signup-success.page';

const routes: Routes = [
  {
    path: '',
    component: SignupSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupSuccessPageRoutingModule {}
