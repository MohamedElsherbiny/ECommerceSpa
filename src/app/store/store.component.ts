import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { RestDatasourceService } from '../services/rest-product.service';
import { Category } from '../model/category.model';
import { Supplier } from '../model/supplier.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  products: Product[];

  suppliers?: Supplier[] = [];
  categorys?: Category[] = [];

  public constructor(private restService: RestDatasourceService) { }
  ngOnInit(): void {
    this.getProducts();
    this.getSuppliers();
    this.getCategorys();
  }

  getProducts() {
    this.products = [];
    this.restService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
  getSuppliers() {
    this.restService.getSuppliers().subscribe(data => this.suppliers = data);
  }

  getCategorys() {
    this.restService.getCategorys().subscribe(data => this.categorys = data);
  }
  getProductId(id: number) {
    const product = this.products.find(p => p.id === id);
    this.restService.deleteProduct(id).subscribe(x =>
      this.products.splice(this.products.indexOf(product), 1)
    );
  }
}
