import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MaterialModuleModule } from './material-module/material-module.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminModule } from './admin/admin.module';
import { StoreModule } from './store/store.module';
import { SupplierModule } from './suppliers/supplier.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './services/jwt-interceptor.service';
import { CartSummaryComponent } from './store/cart-summary/cart-summary.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartSummaryComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModuleModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    AdminModule,
    StoreModule,
    SupplierModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
