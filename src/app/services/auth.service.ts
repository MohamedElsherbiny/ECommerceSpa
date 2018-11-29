import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../model/loginModel.model';
import { RegisterModel } from '../model/registerModel.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:5000/api/';
  public redirectUrl: string;
  public logedIn;

  constructor(private http: HttpClient) { }

  logIn(loginModel: LoginModel): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'auth/login', loginModel);
  }

  register(registerModel: RegisterModel): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'auth/register', registerModel);
  }
}
