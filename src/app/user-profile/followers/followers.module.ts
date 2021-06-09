import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowersPageRoutingModule } from './followers-routing.module';

import { FollowersPage } from './followers.page';
import { HeaderComponent } from '../header/header.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowersPageRoutingModule
  ],
  declarations: [FollowersPage,HeaderComponent]
})
export class FollowersPageModule {}
