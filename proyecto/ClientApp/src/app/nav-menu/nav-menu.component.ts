import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../hotel/models/user';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  user: User;
  Close: boolean;
  Open: boolean;
  tipo: string;
  sesion: Boolean = false ;
  constructor(private authenticationService: AuthenticationService, private router: Router){
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/login']);
      this.Close = false;
      this.Open = true;
    }else{
      this.router.navigate(['/home']);
      this.Close = true;
      this.Open = false;
    }
  }
  ngOnInit(){
    this.obtenerUsuario();
  }

  collapse() {
    this.isExpanded = false;
  }
  obtenerUsuario() {
    var lista = JSON.parse(sessionStorage.getItem('Login'));
    if (lista != null) {
      this.user = lista;
      this.tipo = this.user.tipo;
    }
  } 
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  removeLocal(){
    sessionStorage.removeItem("Login");
    window.location.reload();
  }
}
