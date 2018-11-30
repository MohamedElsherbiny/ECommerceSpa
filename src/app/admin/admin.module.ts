import { NgModule } from '@angular/core';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AdminComponent } from './admin.component';

import { UserCardComponent } from './users/user-card/user-card.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

import { RoleAddComponent } from './roles/role-add/role-add.component';
import { RoleCardComponent } from './roles/role-card/role-card.component';
import { RoleDetailComponent } from './roles/role-detail/role-detail.component';
import { RoleEditComponent } from './roles/role-edit/role-edit.component';

import { OrdersComponent } from './orders/orders.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { AddToRoleComponent } from './users/add-to-role/add-to-role.component';


@NgModule({
  imports: [
    MaterialModuleModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    UserCardComponent,
    AdminComponent,
    UserEditComponent,
    UserAddComponent,
    UserDetailComponent,
    RoleAddComponent,
    RoleCardComponent,
    RoleDetailComponent,
    RoleEditComponent,
    OrdersComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    AddToRoleComponent
  ]
})
export class AdminModule { }
