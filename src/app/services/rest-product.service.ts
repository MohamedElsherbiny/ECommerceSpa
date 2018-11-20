import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../model/product.model';
import { Supplier } from '../model/supplier.model';
import { Category } from '../model/category.model';
import { ProductToAdd } from '../model/productToAdd.model';

@Injectable({
  providedIn: 'root'
})
export class RestDatasourceService {
  baseUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'product');
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + 'product/' + id);
  }
  updateProduct(product: ProductToAdd): Observable<ProductToAdd> {
    return this.http.post<ProductToAdd>(this.baseUrl + 'product/Update', product);
  }

  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.baseUrl + 'supplier');
  }
  getCategorys(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + 'category');
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post<Product>(this.baseUrl + 'product/add', product);
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.post<Number>(this.baseUrl + 'product/delete/' + id, {});
  }
}
