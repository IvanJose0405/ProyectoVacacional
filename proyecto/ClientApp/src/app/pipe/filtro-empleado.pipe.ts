import { Pipe, PipeTransform } from '@angular/core';
import { Empleado } from '../hotel/models/empleado';

@Pipe({
  name: 'filtroEmpleado'
})
export class FiltroEmpleadoPipe implements PipeTransform {

  transform(empleado: Empleado[], searchText: string): any {
    if (searchText == null) return empleado;
    return empleado.filter(p =>
      p.cedula.toLowerCase()
        .indexOf(searchText.toLowerCase()) !== -1);
  }
}