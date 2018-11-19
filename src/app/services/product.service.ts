import { Injectable } from '@angular/core';
import { RestDatasourceService } from './rest-datasource.service';
import { Supplier } from '../model/supplier.model';
import { Category } from '../model/category.model';
import { map } from 'rxjs/operators';
import { SuppliersForSelect } from '../model/SuppliersForSelect.model';
import { CategorysForSelect } from '../model/CategorysForSelect.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  suppliers?: Supplier[] = [];
  suppliersForSeclect?: SuppliersForSelect[] = [];

  categorys?: Category[] = [];
  categorysForSeclect?: CategorysForSelect[] = [];

  constructor(private restService: RestDatasourceService) { }

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

}

