import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './store/home.component';
import { AddProductComponent } from './store/add-product/add-product.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'product/add', component: AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
