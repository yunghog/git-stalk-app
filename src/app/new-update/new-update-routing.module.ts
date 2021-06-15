import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewUpdatePage } from './new-update.page';

const routes: Routes = [
  {
    path: '',
    component: NewUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewUpdatePageRoutingModule {}
