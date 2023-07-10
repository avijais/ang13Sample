import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from '../services/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-mat-dashboard',
  templateUrl: './mat-dashboard.component.html',
  styleUrls: ['./mat-dashboard.component.scss']
})
export class MatDashboardComponent implements OnInit {

  constructor(
    public dialogService: ConfirmationDialogService
  ) { }

  ngOnInit(): void {
  }

  result: any;
  openConfirmDialog(): void {
    const message = `Are you sure you want to do this?`;
    const data = { title: "Confirm Action", message, confirmTxt: 'Yes', cancelTxt: 'No' }
    this.dialogService.confirmDialog(data).subscribe(dialogResult => {
      console.log("afterclosed : ", dialogResult)
      this.result = dialogResult;
    });
  }

}
