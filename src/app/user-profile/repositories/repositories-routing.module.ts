import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepositoriesPage } from './repositories.page';

const routes: Routes = [
  {
    path: '',
    component: RepositoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepositoriesPageRoutingModule {}
