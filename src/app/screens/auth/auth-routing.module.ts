import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: AuthPage,
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'success/:method',
    loadChildren: () => import('./success/success.module').then((m) => m.SuccessPageModule),
  },
  {
    path: 'create-password',
    loadChildren: () => import('./create-password/create-password.module').then((m) => m.CreatePasswordPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
