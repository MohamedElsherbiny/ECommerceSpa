import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModuleModule } from '../material-module/material-module.module';

import { SupplierComponent } from './supplier.component';
import { SupplierCardComponent } from './supplier-card/supplier-card.component';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
import { SupplierAddComponent } from './supplier-add/supplier-add.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    SupplierComponent,
    SupplierCardComponent,
    SupplierDetailComponent,
    SupplierEditComponent,
    SupplierAddComponent
  ]
})
export class SupplierModule { }
