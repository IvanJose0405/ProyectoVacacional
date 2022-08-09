import { Reserva } from './../hotel/models/reserva';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'filtroFecha'
})
export class FiltroFechaPipe implements PipeTransform {

  transform(reserva: Reserva[], searchText: Date): any {
    var search: DatePipe;
    if (searchText == null) return reserva;
    return reserva.filter(p =>
      search.transform(p.fechaReserva, "yyyy-MM-dd") .indexOf(search.transform(searchText, "yyyy-MM-dd")) !== -1);
  }
  

}
