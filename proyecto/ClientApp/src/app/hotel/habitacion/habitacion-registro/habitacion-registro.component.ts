import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { Habitacion } from '../../models/habitacion';

@Component({
  selector: 'app-habitacion-registro',
  templateUrl: './habitacion-registro.component.html',
  styleUrls: ['./habitacion-registro.component.css']
})
export class HabitacionRegistroComponent implements OnInit {
  habitacion: Habitacion;
  constructor(private habitacionService: HabitacionService, private formBuilder: FormBuilder,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.habitacion = new Habitacion();
    this.habitacion.tipo = 'seleccionar tipo';
    this.habitacion.estado = 'seleccionar estado';
  }

  add() {
    this.habitacionService.post(this.habitacion).subscribe(p => {
      if (p != null) {
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.cuerpo = 'Info: se ha registrado una habitacion';
        this.habitacion = p;
      }
    });
    window.location.reload();
  }

}
