import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDashboardComponent } from './mat-dashboard/mat-dashboard.component';
import { MatExampleRoutingModule } from './mat-example-routing.module';



@NgModule({
  declarations: [
    MatDashboardComponent
  ],
  imports: [
    CommonModule,
    MatExampleRoutingModule
  ]
})
export class MatExampleModule { }
