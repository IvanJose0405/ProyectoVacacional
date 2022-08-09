import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { Habitacion } from '../../models/habitacion';
import { Reserva } from '../../models/reserva';

@Component({
  selector: 'app-habitacion-consulta',
  templateUrl: './habitacion-consulta.component.html',
  styleUrls: ['./habitacion-consulta.component.css']
})
export class HabitacionConsultaComponent implements OnInit {
  habitaciones: Habitacion[];
  searchText: string;
  constructor(private habitacionService: HabitacionService, private reservaService: ReservaService) { }

  ngOnInit(){
    this.habitaciones = [];
    this.habitacionService.get().subscribe(result => {
      this.habitaciones = result;
    });
      this.actualizarListaSignal();
  }

  private actualizarListaSignal(){
    this.habitacionService.signalRecived.subscribe((habitacion: Habitacion) => {
      this.habitaciones.push(habitacion);
    });
    console.log('a');
    this.reservaService.signalRecived.subscribe((reserva: Reserva) => {
      this.habitacionService.get().subscribe(result => {
        this.habitaciones = result;
      });
    });
  }


    /*Ordenar en la tabla*/

    sortTable(n) {
      var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
      table = document.getElementById("myTable");
      switching = true;
      dir = "asc";
      while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i + 1].getElementsByTagName("TD")[n];
          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
          else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          switchcount++;
        }
        else {
          if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }
      }
    }
}
