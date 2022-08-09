import { Factura } from "./factura";
import { Habitacion } from "./habitacion";
import { Persona } from "./persona";

export class Cliente extends Persona{
    idcliente: string;
    factura: Factura;
    habitacion: Habitacion;
    idhabitacion:string;
    ppal: string;
}
