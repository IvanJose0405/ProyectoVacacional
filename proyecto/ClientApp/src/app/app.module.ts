import { CommonModule } from '@angular/common';
import { NgbDatepicker, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './services/jwt.interceptor';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ClienteConsultaComponent } from './hotel/cliente/cliente-consulta/cliente-consulta.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ClienteGestionComponent } from './hotel/cliente/cliente-gestion/cliente-gestion.component';
import { ClienteRegistroComponent } from './hotel/cliente/cliente-registro/cliente-registro.component';
import { FacturaConsultaComponent } from './hotel/factura/factura-consulta/factura-consulta.component';
import { FacturaRegistroComponent } from './hotel/factura/factura-registro/factura-registro.component';
import { FacturaGestionComponent } from './hotel/factura/factura-gestion/factura-gestion.component';
import { EmpleadoConsultaComponent } from './hotel/empleado/empleado-consulta/empleado-consulta.component';
import { EmpleadoRegistroComponent } from './hotel/empleado/empleado-registro/empleado-registro.component';
import { EmpleadoGestionComponent } from './hotel/empleado/empleado-gestion/empleado-gestion.component';
import { LoginComponent } from './login/login.component';
import { FiltroClientePipe } from './pipe/filtro-cliente.pipe';
import { FiltroEmpleadoPipe } from './pipe/filtro-empleado.pipe';
import { FiltroHabitacionPipe } from './pipe/filtro-habitacion.pipe';
import { HabitacionRegistroComponent } from './hotel/habitacion/habitacion-registro/habitacion-registro.component';
import { HabitacionConsultaComponent } from './hotel/habitacion/habitacion-consulta/habitacion-consulta.component';
import { HabitacionGestionComponent } from './hotel/habitacion/habitacion-gestion/habitacion-gestion.component';
import { Cliente2RegistroComponent } from './clienteweb/cliente2-registro/cliente2-registro.component';
import { Cliente2ConsultaComponent } from './clienteweb/cliente2-consulta/cliente2-consulta.component';
import { ReservaRegistroComponent } from './hotel/reserva/reserva-registro/reserva-registro.component';
import { ReservaGestionComponent } from './hotel/reserva/reserva-gestion/reserva-gestion.component';
import { ReservaConsultaComponent } from './hotel/reserva/reserva-consulta/reserva-consulta.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { FiltroReservaPipe } from './pipe/filtro-reserva.pipe';
import { ReservaConsultaClienteComponent } from './hotel/reserva-consulta-cliente/reserva-consulta-cliente.component';
import { FiltroFechaPipe } from './pipe/filtro-fecha.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ClienteConsultaComponent,
    ClienteRegistroComponent,
    ClienteGestionComponent,
    FooterComponent,
    FacturaConsultaComponent,
    FacturaRegistroComponent,
    FacturaGestionComponent,
    EmpleadoConsultaComponent,
    EmpleadoRegistroComponent,
    EmpleadoGestionComponent,
    LoginComponent,
    FiltroClientePipe,
    AlertModalComponent,
    FiltroEmpleadoPipe,
    FiltroHabitacionPipe,
    HabitacionRegistroComponent,
    HabitacionConsultaComponent,
    HabitacionGestionComponent,
    Cliente2RegistroComponent,
    Cliente2ConsultaComponent,
    ReservaRegistroComponent,
    ReservaGestionComponent,
    ReservaConsultaComponent,
    RegistroUsuarioComponent,
    FiltroReservaPipe,
    ReservaConsultaClienteComponent,
    FiltroFechaPipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule,
  ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
