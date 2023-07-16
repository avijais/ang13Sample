import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MatDashboardComponent } from './mat-dashboard/mat-dashboard.component';

const routes: Routes = [
    // { path: '', component: MatDashboardComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MatExampleRoutingModule { }
