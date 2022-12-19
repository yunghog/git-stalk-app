import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'splash', loadChildren: () => import('./splash/splash.module').then((m) => m.SplashPageModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthPageModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreensRoutingModule {}
