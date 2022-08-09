import { Pipe, PipeTransform } from '@angular/core';
import { Reserva } from '../hotel/models/reserva';

@Pipe({
  name: 'filtroReserva'
})
export class FiltroReservaPipe implements PipeTransform {
  transform(reserva: Reserva[], searchText: string): any {
    if (searchText == null) return reserva;
    return reserva.filter(p =>
      p.idReserva.toLowerCase()
        .indexOf(searchText.toLowerCase()) !== -1);
  }


}
