import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, SidebarComponent],
})
export class SharedModule {}
