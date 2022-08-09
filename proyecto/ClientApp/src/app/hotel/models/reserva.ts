import { Habitacion } from "./habitacion";

export class Reserva extends Habitacion {
    idReserva: string;
    fechaReserva: Date;
    cedula: string;
    iva: number;
    total: number;
    fechaEntrada: Date;
    fechaSalida: Date;
    idHabitacion: string;
    tipo: string;
    nPersonas: number;
    estado: string;
    precio: number;
    dias: number;
    subTotal: number;
    habitacion: Habitacion;
}