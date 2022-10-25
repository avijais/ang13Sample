import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './components/view/view.component';
import { SelectorComponent } from './pages/selector/selector.component';

const routes: Routes = [
  { path: '', component: ViewComponent },
  { path: 'selector', component: SelectorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssScssRoutingModule { }
