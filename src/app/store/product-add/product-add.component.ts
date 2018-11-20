import { Component, OnInit, Input } from '@angular/core';
import { RestDatasourceService } from 'src/app/services/rest-product.service';
import { Supplier } from 'src/app/model/supplier.model';
import { ProductToAdd } from 'src/app/model/productToAdd.model';
import { Category } from 'src/app/model/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: ProductToAdd = new ProductToAdd();

  suppliers?: Supplier[] = [];
  categorys?: Category[] = [];

  constructor(private restService: RestDatasourceService, private router: Router) { }

  ngOnInit() {
    this.getSuppliers();
    this.getCategorys();
    this.product = new ProductToAdd();
  }
  getSuppliers() {
    this.restService.getSuppliers().subscribe(data => this.suppliers = data);
  }

  getCategorys() {
    this.restService.getCategorys().subscribe(data => this.categorys = data);
  }

  AddProduct() {
    this.restService.addProduct(this.product).subscribe(x =>
      this.router.navigate(['home'])
    );
    this.product = new ProductToAdd();
  }
}
