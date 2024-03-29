import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutenticaService } from './autentica.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AutenticaService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
