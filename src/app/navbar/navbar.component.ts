import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  helper = new JwtHelperService();
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
logedIn() {
  const token = localStorage.getItem('token');
    const isExpired = this.helper.isTokenExpired(token);
    if (isExpired) {
      return false;
    }
    return true;
}

logOut() {
  localStorage.removeItem('token');
  this.router.navigate(['/logedout']);
}
}
