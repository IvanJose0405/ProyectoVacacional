import { UrlTree } from '@angular/router';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import { Reserva } from '../../models/reserva';
import { User } from '../../models/user';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';

// declare var jsPDF: any; // Important
import { jsPDF } from "jspdf";

import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-reserva-consulta',
  templateUrl: './reserva-consulta.component.html',
  styleUrls: ['./reserva-consulta.component.css']
})
export class ReservaConsultaComponent implements OnInit {
  searchText: string;
  searchDate: Date;
  reservas: Reserva[];
  user: User;
  tipo: string;
  estado: boolean;
  reserva: Reserva;
  cedula: string;
  constructor(private reservaService: ReservaService, private modalService: NgbModal) { }
  
  ngOnInit(){
    this.reservas = [];
    this.reservaService.get().subscribe(result =>{
      this.reservas = result;
     });
    this.actualizarListaSignal();
  }
  
  
  checkin(reserva: Reserva){
    reserva.habitacion.estado = "Ocupado";
    this.reservaService.put(reserva).subscribe(p =>{
        if(p != null){
          const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.cuerpo = 'Info: Se realizó el check in';
          this.estado = true;
        }
    });
  }
  checkout(reserva: Reserva){
    reserva.habitacion.estado = "desocupado";
    this.reservaService.put(reserva).subscribe(p =>{
        if(p != null){
          const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.cuerpo = 'Info: Se realizó el check out';
          this.estado = true;
        }
    });
  }
  private actualizarListaSignal(){
    this.reservaService.signalRecived.subscribe((reserva: Reserva) => {
      this.reservaService.get().subscribe(result =>{
        this.reservas = result;
       });
    });
  }

  obtenerUsuario() {
    var lista = JSON.parse(sessionStorage.getItem('Login'));
    if (lista != null) {
      this.user = lista;
      this.tipo = this.user.tipo;
    }
  } 

  generarFactura(reserva: Reserva) {
    const doc = new jsPDF()
 
  // It can parse html:
  // <table id="my-table"><!-- ... --></table>
    // doc.autoTable({ html: '#my-table' })
    const columns  = ['DATOS DEL CAMPESINO'];
    const rows = [
      ['GGGG'],
      ['TEL'],
    ];
  
    var url = doc.loadFile('../assets/Hotel.png');
    doc.text('Hotel Neruda', 90, 28);
    doc.addImage(url,102,10,0,10)

    autoTable(doc, {
      startY: 30,
      columnStyles: { titulo: { halign: 'right'}, value: {halign: 'left'} }, // European countries centered
      // columns: [{}],
      body: [
        { 
          titulo: 'ID reserva:',
          value: reserva.idReserva,
        },
        { 
          titulo: 'Cedula:',
          value: reserva.cedula,
        },
        { 
          titulo: 'Número de la habitación:',
          value: reserva.idHabitacion,
        },
        { 
          titulo: 'Fecha reserva:',
          value: reserva.fechaReserva + "",
        },
        { 
          titulo: 'Fecha entrada:',
          value: reserva.fechaEntrada + "",
        },
        { 
          titulo: 'Fecha salida:',
          value: reserva.fechaSalida + "",
        },
        { 
          titulo: 'Número de días:',
          value: reserva.dias,
        },
        { 
          titulo: 'Número de personas:',
          value: reserva.habitacion.nPersonas,
        },
        { 
          titulo: 'Tipo:',
          value: reserva.habitacion.tipo,
        },
        { 
          titulo: 'Precio:',
          value: reserva.habitacion.precio,
        },
        { 
          titulo: 'IVA:',
          value: reserva.iva,
        },
        { 
          titulo: 'Subtotal:',
          value: reserva.subTotal,
        },
        { 
          titulo: 'Total:',
          value: reserva.total,
        },
      ],
    });
    doc.text('¡Gracias por su visita!', 80, 135);
    // doc.autoTable({columns, rows,startY: 20, pageBreak: 'auto'});

    // Or use javascript directly:
    // doc.autoTable({
    //   head: [['Name', 'Email', 'Country']],
    //   body: [
    //     ['David', 'david@example.com', 'Sweden'],
    //     ['Castille', 'castille@example.com', 'Spain'],
    //     // ...
    //   ],
    // })
    
    doc.save('table.pdf')
  }
  

}
