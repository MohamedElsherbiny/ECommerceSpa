import { Component, OnInit } from '@angular/core';
import { RestDatasourceService } from 'src/app/services/rest-product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { Category } from 'src/app/model/category.model';
import { Supplier } from 'src/app/model/supplier.model';
import { ProductToUpdate } from 'src/app/model/productToUpdate.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = new Product();
  productToUpdate: ProductToUpdate = new ProductToUpdate();

  suppliers?: Supplier[] = [];
  categorys?: Category[] = [];

  constructor(private restService: RestDatasourceService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getSuppliers();
    this.getCategorys();
    const productId = +this.activeRoute.snapshot.params.id;
    this.restService.getProduct(productId).subscribe(x => {
      this.product = x;
    });
  }

  saveProduct() {
    this.productToUpdate = new ProductToUpdate(
      this.product.id,
      this.product.name,
      this.product.description,
      this.product.unitPrice,
      this.product.quantityPerUnit,
      this.product.top20,
      this.product.supplierId,
      this.product.categoryId
    );
    this.restService.updateProduct(this.productToUpdate).subscribe(x => {
      this.router.navigate(['home']);
    });
  }
  getSuppliers() {
    this.restService.getSuppliers().subscribe(data => this.suppliers = data);
  }

  getCategorys() {
    this.restService.getCategorys().subscribe(data => this.categorys = data);
  }
}
