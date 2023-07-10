import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmationDialogComponent } from '../../components/confirmation-dialog/confirmation-dialog.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class ConfirmationDialogService {

  constructor(private dialog: MatDialog) { }

  result: string = '';
  confirmDialog(data: ConfirmDialogModel): Observable<boolean> {
    return this.dialog.open(ConfirmationDialogComponent, {
      maxWidth: "400px",
      data,
      width: '400px',
      disableClose: true
    }).afterClosed();

    // dialogRef.afterClosed().subscribe(dialogResult => {
    //   this.result = dialogResult;
    // });
  }
}
