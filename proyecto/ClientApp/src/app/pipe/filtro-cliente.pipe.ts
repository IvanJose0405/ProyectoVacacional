import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from '../hotel/models/cliente';

@Pipe({
  name: 'filtroCliente'
})
export class FiltroClientePipe implements PipeTransform {

  transform(cliente: Cliente[], searchText: string): any {
    if (searchText == null) return cliente;
    return cliente.filter(p =>
      p.idcliente.toLowerCase()
        .indexOf(searchText.toLowerCase()) !== -1);
  }
}
