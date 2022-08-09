using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class Empleado : Persona
    {
        [Column(TypeName = "varchar(13)")]
        public string IdEmpleado { get; set; }

        [Column(TypeName = "varchar(15)")]
        public string Cargo { get; set; }

        [Column(TypeName = "varchar(8)")]
        public string Jornada { get; set; }

        [Column(TypeName = "varchar(13)")]
        public string Jefe { get; set; }
    }
}
