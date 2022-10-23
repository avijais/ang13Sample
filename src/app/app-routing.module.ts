import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login.component';
import { ListComponent } from './modules/expense/components/list/list.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'list', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
