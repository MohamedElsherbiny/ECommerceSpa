import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { ProductAddComponent } from './store/product-add/product-add.component';
import { ProductEditComponent } from './store/product-edit/product-edit.component';
import { ProductDetailComponent } from './store/product-detail/product-detail.component';
import { SupplierComponent } from './suppliers/supplier.component';
import { SupplierAddComponent } from './suppliers/supplier-add/supplier-add.component';
import { SupplierEditComponent } from './suppliers/supplier-edit/supplier-edit.component';
import { CategoryEditComponent } from './categorys/category-edit/category-edit.component';
import { SupplierDetailComponent } from './suppliers/supplier-detail/supplier-detail.component';
import { CategoryComponent } from './categorys/category.component';
import { CategoryAddComponent } from './categorys/category-add/category-add.component';
import { CategoryDetailComponent } from './categorys/category-detail/category-detail.component';

const routes: Routes = [
  { path: 'home', component: StoreComponent },
  { path: 'product/add', component: ProductAddComponent },
  { path: 'product/edit/:id', component: ProductEditComponent },
  { path: 'product/detail/:id', component: ProductDetailComponent },

  { path: 'supplier', component: SupplierComponent },
  { path: 'supplier/add', component: SupplierAddComponent },
  { path: 'supplier/edit/:id', component: SupplierEditComponent },
  { path: 'supplier/detail/:id', component: SupplierDetailComponent },

  { path: 'category', component: CategoryComponent },
  { path: 'category/add', component: CategoryAddComponent },
  { path: 'category/edit/:id', component: CategoryEditComponent },
  { path: 'category/detail/:id', component: CategoryDetailComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: StoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
