import { Reserva } from './../hotel/models/reserva';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import * as singnalR from '@aspnet/signalr';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  baseUrl: string;
  private hubConnection: singnalR.HubConnection;
  signalRecived = new EventEmitter<Reserva>();
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
    this.hubConnection.on("reservaRegistrada", (data: Reserva) => {
      this.signalRecived.emit(data);
    });
  }
  get(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.baseUrl + 'api/Reserva')
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Reserva[]>('Consulta Reserva', null))
      );
  }

  getId(Cedula: string): Observable<Reserva[]> {
    const url = `${this.baseUrl + 'api/Reserva'}/${Cedula}`;
      return this.http.get<Reserva[]>(url, httpOptions)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Reserva[]>('Buscar Reserva', null))
      );
  }
  put(reserva: Reserva): Observable<Reserva> {
    return this.http.put<Reserva>(this.baseUrl + 'api/Reserva/'+ reserva.idReserva, reserva, httpOptions)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Reserva>('Registrar Reserva', null))
      );
  }

  post(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(this.baseUrl + 'api/Reserva', reserva)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Reserva>('Registrar Reserva', null))
      );
  }
  delete(numeroreserva: string): Observable<Reserva> {
    return this.http.get<Reserva>(this.baseUrl + 'api/Reserva/' + numeroreserva).pipe(
      tap(_ => this.handleErrorService.log('Datos')),
      catchError(this.handleErrorService.handleError<Reserva>('Consulta Reserva', null))
    );
  }
}