import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Empleado } from '../hotel/models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }
  get(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.baseUrl + 'api/Empleado')
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Empleado[]>('Consulta Empleado', null))
      );
  }
  post(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.baseUrl + 'api/Empleado', empleado)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Empleado>('Registrar Empleado', null))
      );
  }

}
