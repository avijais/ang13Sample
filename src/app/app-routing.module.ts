import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login.component';

const expenseModule = () => import('./modules/expense/expense-routing.module').then( m => m.ExpenseRoutingModule );
const cssScssModule = () => import('./css-scss/css-scss-routing.module').then( m => m.CssScssRoutingModule );


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'list', loadChildren: expenseModule },
  { path: 'css-scss', loadChildren: cssScssModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
