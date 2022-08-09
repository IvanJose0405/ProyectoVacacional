import { AlertModalComponent } from './../@base/alert-modal/alert-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../hotel/models/user';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user: User;
 user2: User;
 estado: boolean;
 returnUrl: string;
  constructor(
    private authenticationService: AuthenticationService, private modalService: NgbModal
    ,private route: ActivatedRoute, private router: Router
    ) {
      if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/home']);
      }
     }

  ngOnInit(){
    this.user2 = new User();
    this.authenticationService.currentUser.subscribe(x => this.user = x);
    if(this.user){
      this.estado = true;
    }
    else{
      this.estado = false;
    }
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  login() {
    this.authenticationService.login(this.user2.password, this.user2.username)
      .pipe(first())
      .subscribe(
      data => {
        this.estado = true;
        window.location.reload();
      },
      error => {
        this.estado = false;
      });
  }
  obtenerUsuario() {
    var lista = JSON.parse(sessionStorage.getItem('Login'));
    if (lista != null) {
      this.user = lista;
    }
  }   

}
