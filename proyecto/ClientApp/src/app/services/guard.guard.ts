import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../hotel/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
    private authenticationService: AuthenticationService
  ) { }
  user: User = (JSON.parse(sessionStorage.getItem('Login')));
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (this.user.tipo == "Invitado") {
      sessionStorage.removeItem('Login');
      alert("Acceso denegado")
      window.location.reload();
      return false;
    }
    else if (this.user.tipo = "Administrador") {
      return true;
    }
    else {
      this.router.navigate(['/home'])
    }
    return false;
  }
}
