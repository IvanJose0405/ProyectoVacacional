import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Habitacion } from '../hotel/models/habitacion';
import * as singnalR from '@aspnet/signalr';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {
  baseUrl: string;
  private hubConnection: singnalR.HubConnection;
  signalRecived = new EventEmitter<Habitacion>();
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
    this.buildConnection();  this.startConnection();
  }
  private buildConnection = () => {
    this.hubConnection = new singnalR.HubConnectionBuilder()
    .withUrl(this.baseUrl + "signalHub")
    .build();
  }
  private startConnection = () => {
    this.hubConnection
    .start()
    .then(() => {
      console.log("Iniciando signal");
      this.registerSignalEvents();
    })
    .catch(err => {
      console.log("Error en el signal" + err);
      setTimeout(function() {
        this.startConnection();
      }, 3000);
    });
  }
  private registerSignalEvents(){
    this.hubConnection.on("habitacionRegistrada", (data: Habitacion) => {
      this.signalRecived.emit(data);
    });
  }
  get(): Observable<Habitacion[]> {
    return this.http.get<Habitacion[]>(this.baseUrl + 'api/Habitacion')
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Habitacion[]>('Consulta Habitacion', null))
      );
  }
  post(habitacion: Habitacion): Observable<Habitacion> {
    return this.http.post<Habitacion>(this.baseUrl + 'api/Habitacion', habitacion)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Habitacion>('Registrar Habitacion', null))
      );
  }
  getId(IdHabitacion: string): Observable<Habitacion> {
    const url = `${this.baseUrl + 'api/reserva'}/${IdHabitacion}`;
      return this.http.get<Habitacion>(url, httpOptions)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Habitacion>('Buscar Reserva', null))
      );
  }
}
