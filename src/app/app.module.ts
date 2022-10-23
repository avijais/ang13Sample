import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/user/list/list.component';
import { AddComponent } from './components/user/add/add.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './modules/auth/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
