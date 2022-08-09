import { ReservaConsultaClienteComponent } from './hotel/reserva-consulta-cliente/reserva-consulta-cliente.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClienteConsultaComponent } from './hotel/cliente/cliente-consulta/cliente-consulta.component';
import { ClienteRegistroComponent } from './hotel/cliente/cliente-registro/cliente-registro.component';
import { ClienteGestionComponent } from './hotel/cliente/cliente-gestion/cliente-gestion.component';
import { EmpleadoRegistroComponent } from './hotel/empleado/empleado-registro/empleado-registro.component';
import { EmpleadoConsultaComponent } from './hotel/empleado/empleado-consulta/empleado-consulta.component';
import { EmpleadoGestionComponent } from './hotel/empleado/empleado-gestion/empleado-gestion.component';
import { FacturaRegistroComponent } from './hotel/factura/factura-registro/factura-registro.component';
import { FacturaConsultaComponent } from './hotel/factura/factura-consulta/factura-consulta.component';
import { FacturaGestionComponent } from './hotel/factura/factura-gestion/factura-gestion.component';
import { HabitacionRegistroComponent } from './hotel/habitacion/habitacion-registro/habitacion-registro.component';
import { HabitacionConsultaComponent } from './hotel/habitacion/habitacion-consulta/habitacion-consulta.component';
import { HabitacionGestionComponent } from './hotel/habitacion/habitacion-gestion/habitacion-gestion.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ReservaRegistroComponent } from './hotel/reserva/reserva-registro/reserva-registro.component';
import { ReservaConsultaComponent } from './hotel/reserva/reserva-consulta/reserva-consulta.component';
import { ReservaGestionComponent } from './hotel/reserva/reserva-gestion/reserva-gestion.component';
import { AuthGuard } from './services/guard.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'clienteregistro', component: ClienteRegistroComponent},
  { path: 'clienteconsulta', component: ClienteConsultaComponent, canActivate: [AuthGuard] },
  { path: 'reservaConsultaCliente', component: ReservaConsultaClienteComponent, canActivate: [AuthGuard] },
  { path: 'clientegestion', component: ClienteGestionComponent, canActivate: [AuthGuard] },
  { path: 'empleadoregistro', component: EmpleadoRegistroComponent, canActivate: [AuthGuard]},
  { path: 'empleadoconsulta', component: EmpleadoConsultaComponent, canActivate: [AuthGuard] },
  { path: 'empleadogestion', component: EmpleadoGestionComponent, canActivate: [AuthGuard] },
  { path: 'reservaregistro', component: ReservaRegistroComponent, canActivate: [AuthGuard]},
  { path: 'reservaconsulta', component: ReservaConsultaComponent, canActivate: [AuthGuard] },
  { path: 'reservagestion', component: ReservaGestionComponent, canActivate: [AuthGuard] },
  { path: 'habitacionregistro', component: HabitacionRegistroComponent, canActivate: [AuthGuard]},
  { path: 'habitacionconsulta', component: HabitacionConsultaComponent, canActivate: [AuthGuard] },
  { path: 'habitaciongestion', component: HabitacionGestionComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }