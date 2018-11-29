import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User.model';
import { Role } from '../model/role.model';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class RestAdminService {
  helper = new JwtHelperService();

  baseUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) { }

  // =============== Users ================
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'admin/users');
  }
  getUser(id: string): Observable<any> {
    return this.http.get<User>(this.baseUrl + 'admin/users' + id);
  }
  addUser(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'admin/users/add', user);
  }
  updateUser(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'admin/users/edit', user);
  }
  deleteUser(userId: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'admin/users/delete/' + userId, {});
  }

  // =================== Roles ==================

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.baseUrl + 'admin/roles');
  }
  getRole(id: string): Observable<any> {
    return this.http.get<Role>(this.baseUrl + 'admin/roles/' + id);
  }
  addRole(roleName: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'admin/roles/add/' + roleName, {});
  }
  updateRole(role: Role): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'admin/roles/edit/', role);
  }
  deleteRole(roleId: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'admin/roles/delete/' + roleId, {});
  }
  addToRole(userId: string, roleId: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'admin/roles/addToRole/' + userId + '/' + roleId, {});
  }
  isInRole(userId: string, roleId: string): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + 'admin/roles/isInRole/' + userId + '/' + roleId, {});
  }
  removeFromRole(userId: string, roleId: string): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + 'admin/roles/removeFromRole/' + userId + '/' + roleId, {});
  }
  getUsersInRole(roleId: string): Observable<User[]> {
    return this.http.post<any>(this.baseUrl + 'admin/roles/UsersInRole/' + roleId, {});
  }
  // ==============Is Admin ==========
  isAdmin() {
    const token  = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.helper.decodeToken(token);
      const isExpired = this.helper.isTokenExpired(token);
      const role = decodedToken.role;
      if (role === 'admin' ) {
          return true;
      }
      return false;
    }
    return false;
  }
}
