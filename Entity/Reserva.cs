using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class Reserva
    {
        [Key]
        [Column(TypeName = "varchar(4)")]
        public string IdReserva { get; set; }

        [NotMapped]
        public Cliente Cliente { get; set; }

        [Column(TypeName = "varchar(13)")]
        public string Cedula { get; set; }

        [NotMapped]
        public Habitacion Habitacion { get; set; }

        [Column(TypeName = "varchar(4)")]
        public string IdHabitacion { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime FechaReserva { get; set; }

        [Column(TypeName = "decimal")]
        public decimal Iva { get; set; }

        [Column(TypeName = "decimal")]
        public decimal Total { get; set; }
        [Column(TypeName = "decimal")]
        public decimal SubTotal { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime FechaEntrada { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime FechaSalida { get; set; }
        [Column(TypeName = "int")]
        public int Dias { get; set; }

        public void CalcularFactura(Habitacion habitacion)
        {
            Habitacion = habitacion;
            Iva = Habitacion.Precio * 0.19m;
            Total = Habitacion.Precio * Dias;
            SubTotal = Total / 1.19m;
        }
        
        
    }
}
