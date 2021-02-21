import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  OpenConfirmDialog(
    dialogTitle: string,
    confirm: string,
    decline: string
  ): Promise<any> {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: dialogTitle,
        yesLabel: confirm,
        noLabel: decline,
      },
    });

    return dialogRef.afterClosed().toPromise();
  }
}
