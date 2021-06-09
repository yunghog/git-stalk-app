import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepositoriesPageRoutingModule } from './repositories-routing.module';

import { RepositoriesPage } from './repositories.page';
import { HeaderComponent } from '../header/header.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepositoriesPageRoutingModule
  ],
  declarations: [RepositoriesPage,HeaderComponent]
})
export class RepositoriesPageModule {}
