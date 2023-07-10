import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  // title: string = '';
  // message: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel
  ) {
    // this.title = data.title;
    // this.message = data.message;
  }

  ngOnInit(): void {
  }

}

export class ConfirmDialogModel {
  constructor(
    public title: string,
    public message: string,
    public confirmTxt: string,
    public cancelTxt: string
  ) { }
}
