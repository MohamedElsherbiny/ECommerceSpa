import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { StoreComponent } from './store.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { PrductCardComponent } from './prduct-card/prduct-card.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

import { CategoryComponent } from './categorys/category.component';
import { CategoryAddComponent } from './categorys/category-add/category-add.component';
import { CategoryCardComponent } from './categorys/category-card/category-card.component';
import { CategoryDetailComponent } from './categorys/category-detail/category-detail.component';
import { CategoryEditComponent } from './categorys/category-edit/category-edit.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { RouterModule } from '@angular/router';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModuleModule,
    FormsModule,
    RouterModule,
    CarouselModule
  ],
  declarations: [
    StoreComponent,
    ProductAddComponent,
    PrductCardComponent,
    ProductEditComponent,
    ProductDetailComponent,

    CategoryComponent,
    CategoryAddComponent,
    CategoryCardComponent,
    CategoryDetailComponent,
    CategoryEditComponent,
    CartDetailComponent,
    CheckoutComponent,
  ]
})
export class StoreModule { }
