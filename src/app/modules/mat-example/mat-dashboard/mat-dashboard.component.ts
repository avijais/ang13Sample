import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
// import { ConfirmationDialogService } from '../services/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-mat-dashboard',
  templateUrl: './mat-dashboard.component.html',
  styleUrls: ['./mat-dashboard.component.scss']
})
export class MatDashboardComponent implements OnInit {

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private _formBuilder: FormBuilder) { }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value;
    //  || 'auto';
  }

  ngOnInit(): void {
  }

  selectFile(event: any) {
    console.log("event : ", event.target.files);
  }

  // result: any;
  // openConfirmDialog(): void {
  //   const message = `Are you sure you want to do this?`;
  //   const data = { title: "Confirm Action", message, confirmTxt: 'Yes', cancelTxt: 'No' }
  //   this.dialogService.confirmDialog(data).subscribe(dialogResult => {
  //     console.log("afterclosed : ", dialogResult)
  //     this.result = dialogResult;
  //   });
  // }

}
