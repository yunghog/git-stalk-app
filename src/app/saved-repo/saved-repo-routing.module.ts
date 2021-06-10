import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedRepoPage } from './saved-repo.page';

const routes: Routes = [
  {
    path: '',
    component: SavedRepoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedRepoPageRoutingModule {}
