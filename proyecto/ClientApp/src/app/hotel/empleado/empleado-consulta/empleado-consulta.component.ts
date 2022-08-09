import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-empleado-consulta',
  templateUrl: './empleado-consulta.component.html',
  styleUrls: ['./empleado-consulta.component.css']
})
export class EmpleadoConsultaComponent implements OnInit {
  empleados: Empleado[];
  searchText: string;
  page = 1;
  pageSize =5;
  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(){
    this.empleadoService.get().subscribe(result => {
      this.empleados = result;
      });
  }


}
