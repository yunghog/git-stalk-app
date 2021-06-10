import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedRepoPageRoutingModule } from './saved-repo-routing.module';

import { SavedRepoPage } from './saved-repo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedRepoPageRoutingModule
  ],
  declarations: [SavedRepoPage]
})
export class SavedRepoPageModule {}
