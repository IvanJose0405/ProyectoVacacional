import { ReservaService } from './../../../services/reserva.service';
import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateParserFormatter, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { ClienteService } from 'src/app/services/cliente.service';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { Cliente } from '../../models/cliente';
import { Habitacion } from '../../models/habitacion';
import { Reserva } from '../../models/reserva';

@Component({
  selector: 'app-reserva-gestion',
  templateUrl: './reserva-gestion.component.html',
  styleUrls: ['./reserva-gestion.component.css']
})
export class ReservaGestionComponent implements OnInit {
  habitaciones: Habitacion[];
  verificar: boolean = false;
  registrar: boolean = false;
  //aca van fecha de entrada y salida atributos del model y hacer el if de que la fecha de salida sea mayor que la de entrada

  public cliente: Cliente;
  reserva: Reserva;
  habitacionEstado: boolean = false;
  habitacionCards: boolean = true;
  numeroDias: number;
  constructor(
    private habitacionService: HabitacionService, private clienteService: ClienteService, private modalService: NgbModal,
    private reservaService: ReservaService
    ) 
  {
  }
  ngOnInit() {
    this.cliente = new Cliente();
    this.reserva = new Reserva();
    const f = new Date();
    this.reserva.fechaReserva = f;
    
    
  }

  filtrar(){
        this.verificar = true;
        if (this.verificar == true) {
          this.habitacionService.get().subscribe(result => {
            this.habitaciones = result.filter(D => D.fechaDisponible < this.reserva.fechaEntrada);
          });
        }
        
  }
  contarDias(){
    var fechaEntrada = new Date(this.reserva.fechaEntrada);
    var fechaSalida = new Date(this.reserva.fechaSalida);
    
    var day_as_milliseconds = 86400000;
    var diff_in_millisenconds = fechaSalida.getTime() - fechaEntrada.getTime();
    var dias = (Math.round(diff_in_millisenconds / (1000 * 60 * 60 * 24))) + 1;
    return this.numeroDias = dias;
  }
  // filtrarFecha(){
  //   this.reserva.FechaEntrada;
  //   this.habitacionService.get().subscribe(result => {
  //     if(result != null){
  //       this.habitaciones = result;
  //       result.forEach(element => {
  //         if(element.){

  //         }
  //       });
  //     }
  //   });

  // }
  mensaje(){
    const messageBox = this.modalService.open(AlertModalComponent)
    messageBox.componentInstance.title = "Resultado Operación";
    messageBox.componentInstance.cuerpo = 'Info: se ha reservado esta habitación, por favor termine el registro de la reserva';
    this.habitacionEstado = true;
    this.habitacionCards = false;

  }
  add(){
    var contar = this.contarDias();
    this.reserva.dias = contar;
    this.reservaService.post(this.reserva).subscribe(p => {
      if (p != null) {
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.cuerpo = 'Info: se ha registrado una reserva';
        this.reserva = p;
      }
    });
  }
  BuscarCedula() {
    this.clienteService.getId(this.cliente.cedula).subscribe(p => {
      if (p != null) {
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.cuerpo = "Info: El cliente ya está registrado";
        this.cliente = p;
        this.verificar = true;
      } else {
        this.verificar = false;
        this.registrar = true;
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.cuerpo = "Info: Este cliente no está registrado";
      }
    })
  }

}
