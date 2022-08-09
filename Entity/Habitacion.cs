using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class Habitacion
    {
        [Key]
        [Column(TypeName = "varchar(4)")]
        public string IdHabitacion { get; set; }

        [Column(TypeName = "varchar(8)")]
        public string Tipo { get; set; }

        [Column(TypeName = "int")]
        public int nPersonas { get; set; }

        [Column(TypeName = "varchar(13)")]
        public string Estado { get; set; }

        [Column(TypeName = "decimal")]
        public int Precio { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime FechaDisponible { get; set; }
    }
}
