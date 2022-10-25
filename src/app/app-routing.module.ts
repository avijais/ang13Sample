import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login.component';
import { MainViewComponent } from './modules/layout/components/main-view/main-view.component';

const expenseModule = () => import('./modules/expense/expense-routing.module').then( m => m.ExpenseRoutingModule );
const cssScssModule = () => import('./css-scss/css-scss-routing.module').then( m => m.CssScssRoutingModule );


const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
    children: [
      { path: 'list', loadChildren: expenseModule },
      { path: 'css-scss', loadChildren: cssScssModule }
    ]
  },
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
