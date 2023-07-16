import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatDashboardComponent } from '../mat-example/mat-dashboard/mat-dashboard.component';
import { MatMainLayoutComponent } from './components/mat-main-layout/mat-main-layout.component';

const routes: Routes = [
  {
    path: "",
    component: MatMainLayoutComponent,
    children: [
      { path: '', component: MatDashboardComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatLayoutRoutingModule { }
