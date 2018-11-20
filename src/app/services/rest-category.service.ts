import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestCategoryService {
  baseUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) { }

  getCategorys(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + 'category');
  }
  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(this.baseUrl + 'category/' + id);
  }
  addCategory(category: Category): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'category/add', category);
  }
  updateCategory(category: Category): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'category/update', category);
  }
  deleteCategory(categoryId: number): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'category/delete/' + categoryId, {});
  }
}
