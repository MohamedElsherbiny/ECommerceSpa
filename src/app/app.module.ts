import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  AppRoutingModule } from './app-routing.module';

import { MaterialModuleModule } from './material-module/material-module.module';
 import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PrductCardComponent } from './store/prduct-card/prduct-card.component';
import { HomeComponent } from './store/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddProductComponent } from './store/add-product/add-product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrductCardComponent,
    HomeComponent,
    NavbarComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModuleModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
