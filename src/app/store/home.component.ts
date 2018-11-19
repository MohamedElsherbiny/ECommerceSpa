import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { RestDatasourceService } from '../services/rest-datasource.service';
import { ProductService } from '../services/product.service';
import { SuppliersForSelect } from '../model/SuppliersForSelect.model';
import { CategorysForSelect } from '../model/CategorysForSelect.model';
import { Category } from '../model/category.model';
import { Supplier } from '../model/supplier.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];
  suppliers?: Supplier[] = [];
  suppliersForSeclect?: SuppliersForSelect[] = [];

  categorys?: Category[] = [];
  categorysForSeclect?: CategorysForSelect[] = [];

  public constructor(private restService: RestDatasourceService, private productService: ProductService) { }
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
  getCategorys() {
    this.restService.getCategorys().
      pipe(
        map(x => this.categorys = x),
      ).subscribe(data => {
        for (let i = 0; i < this.categorys.length; i++) {
          if (this.categorys[i]) {
            this.categorysForSeclect.push(new CategorysForSelect(
              this.categorys[i].name,
              this.categorys[i].id
            ));
          }
        }
        this.categorysForSeclect = this.categorysForSeclect.filter((item, index, self) => index === self.findIndex((t) =>
          t.categoryId === item.categoryId && t.categoryName === item.categoryName
        ));
      });
  }
  getSuppliers() {
    this.restService.getSuppliers().
      pipe(
        map(x => this.suppliers = x),
      ).subscribe(data => {
        for (let i = 0; i < this.suppliers.length; i++) {
          if (this.suppliers[i]) {
            this.suppliersForSeclect.push(new SuppliersForSelect(
              this.suppliers[i].companyName,
              this.suppliers[i].id
            ));
          }
        }
        this.suppliersForSeclect = this.suppliersForSeclect.filter((item, index, self) => index === self.findIndex((t) =>
          t.supplierId === item.supplierId && t.supplierName === item.supplierName
        ));
      });
  }
  getProductId(id: number) {
    const product = this.products.find(p => p.id === id);
    this.restService.deleteProduct(id).subscribe(x =>
      this.products.splice(this.products.indexOf(product), 1)
    );
  }
}
