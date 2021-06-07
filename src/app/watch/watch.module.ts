import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WatchPageRoutingModule } from './watch-routing.module';

import { WatchPage } from './watch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WatchPageRoutingModule
  ],
  declarations: [WatchPage]
})
export class WatchPageModule {}
