import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { Habitacion } from '../../models/habitacion';
import { Reserva } from '../../models/reserva';

@Component({
  selector: 'app-reserva-registro',
  templateUrl: './reserva-registro.component.html',
  styleUrls: ['./reserva-registro.component.css']
})
export class ReservaRegistroComponent implements OnInit {
  formregistro: FormGroup;
  habitacion: Habitacion;
  reserva: Reserva;
  habitaciones: Habitacion[];
  validarFecha: boolean;
  constructor(private habitacionService: HabitacionService,private reservaService: ReservaService, private rutaActiva: ActivatedRoute, private formBuilder: FormBuilder,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.habitacion = new Habitacion();
    const IdHabitacion = this.rutaActiva.snapshot.params.identificacion;
    this.habitacionService.getId(IdHabitacion).subscribe(p => {
      this.habitacion = p;
      this.habitacion != null ? alert('Se Consulta la habitacion') : alert('Error al Consultar');
      if(this.habitacion == null){
        this.validarFecha = false;
      }
      this.validarFecha = true;
    });

    this.buildForm();
  }

  private buildForm() {
    // this.habitacion = new Habitacion();
    // this.habitacion.idHabitacion;
    // this.habitacion.nPersonas;
    // this.habitacion.estado;
    // this.habitacion.precio;
    // this.habitacion.tipo;

    // this.formregistro = this.formBuilder.group({
    //   IdReserva: [this.reserva.IdReserva, [Validators.required, Validators.maxLength(4)]],
    //   Cedula: [this.reserva.Cedula, [Validators.required, Validators.maxLength(4)]],
    //   CodigoHabitacion: [this.reserva.idHabitacion,[Validators.required, Validators.maxLength(4)]],
    //   FechaReserva: [this.reserva.FechaReserva, Validators.required],
    //   FechaEntrada: [this.reserva.FechaEntrada, Validators.required],
    //   FechaSalida: [this.reserva.FechaSalida, Validators.required],
    //   Total: [this.reserva.Total, Validators.required],
    // });
  }

  get control() {
    return this.formregistro.controls;
  }

  onSubmit() {
    if (this.formregistro.invalid) {
      return;
    }
    this.add();
  }

  add() {
    this.reserva = this.formregistro.value;
    this.reservaService.post(this.reserva).subscribe(p => {
      if (p != null) {
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.cuerpo = 'Info: se ha registrado una reserva';
        this.reserva = p;
      }
    });
  }
}
