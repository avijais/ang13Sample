import { NgModule } from '@angular/core';
// CUSTOM_ELEMENTS_SCHEMA,
import { CommonModule } from '@angular/common';

import { CssScssRoutingModule } from './css-scss-routing.module';
import { ViewComponent } from './components/view/view.component';
// import { SelectorComponent } from './pages/selector/selector.component';

@NgModule({
  declarations: [
    ViewComponent
    // ,
    // SelectorComponent
  ],
  imports: [
    CommonModule,
    CssScssRoutingModule
  ]
  // ,
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ]
})
export class CssScssModule { }
