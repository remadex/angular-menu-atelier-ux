import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  isAuth: boolean = true;

  isAuthenticated() {
    return this.isAuth;
  }

  login() {
    this.isAuth = true;
    this.router.navigate(['/menus']);
  }

  logout() {
    this.isAuth = false;
    this.router.navigate(['/login']);
  }
}
