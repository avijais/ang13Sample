import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssScssRoutingModule } from './css-scss-routing.module';
import { SelectorsComponent } from './components/selectors/selectors.component';


@NgModule({
  declarations: [
    SelectorsComponent
  ],
  imports: [
    CommonModule,
    CssScssRoutingModule
  ]
})
export class CssScssModule { }
