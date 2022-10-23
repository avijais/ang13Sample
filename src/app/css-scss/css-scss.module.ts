import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssScssRoutingModule } from './css-scss-routing.module';
import { SelectorsComponent } from './components/selectors/selectors.component';
import { ViewComponent } from './components/view/view.component';
import { SelectorComponent } from './pages/selector/selector.component';


@NgModule({
  declarations: [
    SelectorsComponent,
    ViewComponent,
    SelectorComponent
  ],
  imports: [
    CommonModule,
    CssScssRoutingModule
  ]
})
export class CssScssModule { }
