using Entity;
using PersonaModel;

namespace EmpleadoModel
{
    public class EmpleadoInputModel:PersonaInputModel
    {
        public string IdEmpleado { get; set; }
        public string Jornada { get; set; }
        public string Cargo { get; set; }
         public string Jefe { get; set; }
    }

    public class EmpleadoViewModel : EmpleadoInputModel
    {
        public EmpleadoViewModel(Empleado empleado)
        {
            Cedula = empleado.Cedula;
            IdEmpleado = empleado.Cedula;
            Nombre=empleado.Nombre;
            Apellido=empleado.Apellido;
            Edad = empleado.Edad;
            Sexo = empleado.Sexo;
            Email = empleado.Email;
            Telefono= empleado.Telefono;
            Ciudad = empleado.Ciudad;
            IdEmpleado = empleado.IdEmpleado;
            Jefe = empleado.Cedula;
            Jornada = empleado.Jornada;
            Cargo = empleado.Cargo;
        }
    }
}