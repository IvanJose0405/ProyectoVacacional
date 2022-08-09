export class User {
  username: string;​
  password: string;​
  tipo: string;
  firstName: string;​
  lastName: string;​
  estado: string;
  token: string;
  constructor(){
    this.username = "";
    this.password= "";
    this.tipo= "Cliente";
    this.firstName= "";
    this.lastName= "";
    this.token= "";
    this.estado ="Activo";
  }
}
