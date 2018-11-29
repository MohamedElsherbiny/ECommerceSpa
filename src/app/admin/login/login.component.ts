import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoginModel } from 'src/app/model/loginModel.model';
import { Router } from '@angular/router';
import { RestAdminService } from 'src/app/services/rest-admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: LoginModel = new LoginModel();
  returnUrl: string;
  constructor(private authService: AuthService, private router: Router, private restAdmin: RestAdminService) { }
  ngOnInit() {
    this.returnUrl = this.authService.redirectUrl;
  }
 LogIn() {
    this.authService.logIn(this.loginModel).subscribe(x => {
      const token = x.tokenString;
      localStorage.setItem('token', token);
      this.router.navigate(['/home']);
    });
  }
}
