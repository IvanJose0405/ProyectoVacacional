import { User } from "./user";

export class Persona {
    cedula: string;
    nombre: string;
    apellido: string;
    sexo: string;
    edad: number;
    email: string;
    telefono: string;
    user: User;
    agregarUsuario(user: string, password: string, tipo: string){
        this.user = new User();
        this.user.tipo = tipo;
        this.user.username = user;
        this.user.password = password;
        this.user.firstName = this.nombre;
        this.user.lastName = this.apellido;
        this.user.estado = "Activo";
    }
}
