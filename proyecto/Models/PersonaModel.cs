using Entity;

namespace PersonaModel
{
    public class PersonaInputModel
    {
        public string Cedula { get; set; }

        public string Nombre { get; set; }

        public string Apellido { get; set; }

        public int Edad { get; set; }

        public string Email { get; set; }

        public string Sexo { get; set; }

        public string Telefono { get; set; }

        public string Ciudad { get; set; }
        
        public User User { get; set; }
        
        
    }

    public class PersonaViewModel : PersonaInputModel
    {
        public PersonaViewModel(Persona persona)
        {
            Cedula = persona.Cedula;
            Nombre = persona.Nombre;
            Apellido = persona.Apellido;
            Email = persona.Email;
            Edad = persona.Edad;
            Sexo = persona.Sexo;
            Telefono = persona.Telefono;
            Ciudad = persona.Ciudad;
        }
    }
}
