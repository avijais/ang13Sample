import { Component, OnInit } from '@angular/core';
// import { ConfirmationDialogService } from '../services/confirmation-dialog/confirmation-dialog.service';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-mat-dashboard',
  templateUrl: './mat-dashboard.component.html',
  styleUrls: ['./mat-dashboard.component.scss']
})
export class MatDashboardComponent implements OnInit {

  constructor(
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openConfirmDialog() {
    // this.confirmationDialogSer.confirmDialog();

    this.dialog.open(ConfirmationDialogComponent);
  }

}
