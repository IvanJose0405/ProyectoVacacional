using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class Cliente : Persona
    {
        [Column(TypeName = "varchar(13)")]
        public string IdCliente { get; set; }

        [NotMapped]
        public IList<Reserva> Reservas { get; set; }

        [NotMapped]
        public Habitacion Habitacion { get; set; }

        [Column(TypeName = "varchar(4)")]
        public string IdHabitacion { get; set; }

        [Column(TypeName = "varchar(13)")]
        public string Ppal { get; set; }
    }
}