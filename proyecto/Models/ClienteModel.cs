using Entity;
using PersonaModel;

namespace ClienteModel
{
    public class ClienteInputModel : PersonaInputModel
    {
        public string IdHabitacion { get; set; }

        public string Ppal { get; set; }

        public string IdCliente { get; set; }
    }

    public class ClienteViewModel : ClienteInputModel
    {
        public ClienteViewModel(Cliente cliente)
        {
            IdCliente = cliente.Cedula;
            Cedula = cliente.Cedula;
            Nombre = cliente.Nombre;
            Apellido = cliente.Apellido;
            Edad = cliente.Edad;
            Sexo = cliente.Sexo;
            Email = cliente.Email;
            Telefono = cliente.Telefono;
            Ciudad = cliente.Ciudad;
            Ppal = cliente.Cedula;
            IdHabitacion = cliente.IdHabitacion;
        }
    }
}
