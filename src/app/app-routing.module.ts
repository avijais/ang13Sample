import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login.component';

const expenseModule = () => import('./modules/expense/expense-routing.module').then( m => m.ExpenseRoutingModule );


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'list', loadChildren: expenseModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
