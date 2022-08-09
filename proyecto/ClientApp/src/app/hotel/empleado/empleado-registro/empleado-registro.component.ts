import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from '../../models/empleado';
import { User } from '../../models/user';

@Component({
  selector: 'app-empleado-registro',
  templateUrl: './empleado-registro.component.html',
  styleUrls: ['./empleado-registro.component.css']
})
export class EmpleadoRegistroComponent implements OnInit {
  empleado: Empleado;
  user: User;
  constructor(private empleadoService: EmpleadoService, private formBuilder: FormBuilder,
  private modalService:NgbModal) { }

  ngOnInit() {
    this.empleado= new Empleado();
    this.user = new User();
    this.empleado.sexo = "Seleccionar sexo";
    this.empleado.cargo = "Seleccionar un cargo";
    this.empleado.jornada = "Selecciona una jornada";
    console.log('a');
  }

  private ValidaCedula(control: AbstractControl) {
    const cantidad = control.value;
    if (cantidad <= 0 || cantidad >= 999999999999) {
      return { validCantidad: true, messageCantidad: 'Cantidad menor o igual a 0' };
    }
    return null;
  }

  private ValidaEdad(control: AbstractControl) {
    const edad = control.value;
    if (edad > 65 || edad < 18) {
      return { validSexo: true, messageSexo: 'Edad No Valida' };
    }
    return null;
  }

  private ValidaSexo(control: AbstractControl) {
    const sexo = control.value;
    if (sexo.toLocaleUpperCase() !== 'MASCULINO' && sexo.toLocaleUpperCase() !== 'FEMENINO') {
      return { validSexo: true, messageSexo: 'Sexo No Valido' };
    }
    return null;
  }

  add() {
    this.user.tipo = this.empleado.cargo;
    this.empleado.agregarUsuario(this.user.username, this.user.password, this.user.tipo);
    this.empleadoService.post(this.empleado).subscribe(p => {
      if (p != null) {
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.cuerpo = "Info: se ha agregado un empleado";
        this.empleado = p;
      }
    });
    window.location.reload();
  }
  obtenerUsuario() {
    var lista = JSON.parse(sessionStorage.getItem('Login'));
    console.log(lista);
    if (lista != null) {
      this.user = lista;
    }
  } 

}