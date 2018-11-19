import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { RestDatasourceService } from 'src/app/services/rest-datasource.service';
import { Supplier } from 'src/app/model/supplier.model';
import { map, filter, mapTo } from 'rxjs/operators';
import { ProductToAdd } from 'src/app/model/productToAdd.model';
import { Category } from 'src/app/model/category.model';
import { Router } from '@angular/router';
import { SuppliersForSelect } from 'src/app/model/SuppliersForSelect.model';
import { CategorysForSelect } from 'src/app/model/CategorysForSelect.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: ProductToAdd = new ProductToAdd();

  suppliers?: Supplier[] = [];
  suppliersForSeclect?: SuppliersForSelect[] = [];

  categorys?: Category[] = [];
  categorysForSeclect?: CategorysForSelect[] = [];

  constructor(private restService: RestDatasourceService, private router: Router) { }

  ngOnInit() {
    this.getSuppliers();
    this.getCategorys();
    this.product = new ProductToAdd();
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

  AddProduct() {
    this.restService.addProduct(this.product).subscribe(x =>
         this.router.navigate(['home'])
      );
    this.product = new ProductToAdd();
  }
}
