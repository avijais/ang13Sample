import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/user/add/add.component';
import { ListComponent } from './components/user/list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent},
  { path: 'list', component: ListComponent},
  { path: 'add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
