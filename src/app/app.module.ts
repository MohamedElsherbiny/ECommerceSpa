import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { MaterialModuleModule } from './material-module/material-module.module';
 import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PrductCardComponent } from './store/prduct-card/prduct-card.component';
import { StoreComponent } from './store/store.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ProductEditComponent } from './store/product-edit/product-edit.component';
import { ProductAddComponent } from './store/product-add/product-add.component';
import { ProductDetailComponent } from './store/product-detail/product-detail.component';
import { SupplierComponent } from './suppliers/supplier.component';
import { SupplierCardComponent } from './suppliers/supplier-card/supplier-card.component';
import { SupplierDetailComponent } from './suppliers/supplier-detail/supplier-detail.component';
import { SupplierEditComponent } from './suppliers/supplier-edit/supplier-edit.component';
import { SupplierAddComponent } from './suppliers/supplier-add/supplier-add.component';
import { CategoryComponent } from './categorys/category.component';
import { CategoryAddComponent } from './categorys/category-add/category-add.component';
import { CategoryCardComponent } from './categorys/category-card/category-card.component';
import { CategoryDetailComponent } from './categorys/category-detail/category-detail.component';
import { CategoryEditComponent } from './categorys/category-edit/category-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PrductCardComponent,
    StoreComponent,
    NavbarComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDetailComponent,
    SupplierComponent,
    SupplierCardComponent,
    SupplierDetailComponent,
    SupplierEditComponent,
    SupplierAddComponent,
    CategoryComponent,
    CategoryAddComponent,
    CategoryCardComponent,
    CategoryDetailComponent,
    CategoryEditComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModuleModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
