import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDashboardComponent } from './mat-dashboard/mat-dashboard.component';
import { MatExampleRoutingModule } from './mat-example-routing.module';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";


@NgModule({
  declarations: [
    MatDashboardComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MatExampleRoutingModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ]
})
export class MatExampleModule { }
