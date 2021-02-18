import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [SidebarComponent, ConfirmDialogComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [MaterialModule, SidebarComponent],
})
export class SharedModule {}
