import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewUpdatePageRoutingModule } from './new-update-routing.module';

import { NewUpdatePage } from './new-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewUpdatePageRoutingModule
  ],
  declarations: [NewUpdatePage]
})
export class NewUpdatePageModule {}
