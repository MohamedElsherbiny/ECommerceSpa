import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Supplier } from '../model/supplier.model';

@Injectable({
  providedIn: 'root'
})
export class RestSupplierService {
  baseUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) { }

  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.baseUrl + 'supplier');
  }
  getSupplier(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(this.baseUrl + 'supplier/' + id);
  }
  addSupplier(supplier: Supplier): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'supplier/add', supplier);
  }
  updateSupplier(supplier: Supplier): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'supplier/update', supplier);
  }
  deleteSupplier(supplierId: number): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'supplier/delete/' + supplierId, {});
  }
}
