import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  OpenConfirmDialog(title: string, yesLabel: string, noLabel: string) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: title,
        yesLabel: yesLabel,
        noLabel: noLabel,
      },
    });

    return dialogRef.afterClosed().toPromise();
  }
}
