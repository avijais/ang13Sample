import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDashboardComponent } from './mat-dashboard/mat-dashboard.component';
import { MatExampleRoutingModule } from './mat-example-routing.module';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';



@NgModule({
  declarations: [
    MatDashboardComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MatExampleRoutingModule
  ]
})
export class MatExampleModule { }
