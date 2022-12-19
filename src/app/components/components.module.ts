import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { WavesComponent } from './waves/waves.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, SnackbarComponent, WavesComponent, InputComponent],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent, SidebarComponent, SnackbarComponent, WavesComponent, InputComponent],
})
export class ComponentsModule {}
