import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { ProductAddComponent } from './store/product-add/product-add.component';
import { ProductEditComponent } from './store/product-edit/product-edit.component';
import { ProductDetailComponent } from './store/product-detail/product-detail.component';
import { SupplierComponent } from './suppliers/supplier.component';
import { SupplierAddComponent } from './suppliers/supplier-add/supplier-add.component';
import { SupplierEditComponent } from './suppliers/supplier-edit/supplier-edit.component';
import { SupplierDetailComponent } from './suppliers/supplier-detail/supplier-detail.component';
import { CategoryAddComponent } from './store/categorys/category-add/category-add.component';
import { CategoryDetailComponent } from './store/categorys/category-detail/category-detail.component';
import { CategoryEditComponent } from './store/categorys/category-edit/category-edit.component';
import { CategoryComponent } from './store/categorys/category.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './admin/auth.guard';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { RoleCardComponent } from './admin/roles/role-card/role-card.component';
import { RoleDetailComponent } from './admin/roles/role-detail/role-detail.component';
import { CartDetailComponent } from './store/cart-detail/cart-detail.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { UsersComponent } from './admin/users/users.component';
import { AddToRoleComponent } from './admin/users/add-to-role/add-to-role.component';
import { UserDetailComponent } from './admin/users/user-detail/user-detail.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
      { path: 'users', component: UsersComponent },
      { path: 'users/AddToRole/:id', component: AddToRoleComponent },
      { path: 'users/detail/:id', component: UserDetailComponent },
      { path: 'roles', component: RoleCardComponent },
      { path: 'categorys', component: CategoryComponent },
      { path: 'suppliers', component: SupplierComponent },
      { path: 'product/add', component: ProductAddComponent },
      { path: 'suppliers/add', component: SupplierAddComponent },
      { path: 'suppliers/edit/:id', component: SupplierEditComponent },
      { path: 'suppliers/detail/:id', component: SupplierDetailComponent },
      { path: 'roles/detail/:id', component: RoleDetailComponent },

    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'cart/detail', component: CartDetailComponent },
  { path: 'checkout', component: CheckoutComponent },


  { path: 'home', component: StoreComponent },
  { path: 'product/edit/:id', component: ProductEditComponent },
  { path: 'product/detail/:id', component: ProductDetailComponent },


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
