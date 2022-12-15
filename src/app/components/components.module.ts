import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { WavesComponent } from './waves/waves.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, SnackbarComponent, WavesComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, SidebarComponent, SnackbarComponent, WavesComponent],
})
export class ComponentsModule {}
