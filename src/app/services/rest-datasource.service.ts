import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, distinct } from 'rxjs/operators';

import { Product } from '../model/product.model';
import { Supplier } from '../model/supplier.model';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class RestDatasourceService {
  baseUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'product');
  }

  getSuppliers(): Observable<Supplier[]> {
    return this.getProducts()
      .pipe(
        map(data => data.map(x => x.supplier))
      );
  }
  getCategorys(): Observable<Category[]> {
    return this.getProducts()
      .pipe(
        map(data => data.map(x => x.category))
      );
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post<Product>(this.baseUrl + 'product/add', product);
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.post<Number>(this.baseUrl + 'product/delete/' + id, {});
  }
}
