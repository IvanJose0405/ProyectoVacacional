using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Entity;

namespace HabitacionModel
{
    public class HabitacionInputModel
    {
        [Required(ErrorMessage = "La identificacion es requerida")]
        public string IdHabitacion { get; set; }

        [Required(ErrorMessage = "El Tipo es requerida")]
        public string Tipo { get; set; }

        [Range(1, 4, ErrorMessage = "Numero de personas maximo de 4")]
        public int nPersonas { get; set; }

        [Required(ErrorMessage = "El nombre es requerida")]
        public string Estado { get; set; }
        
        [Range(100000, 400000, ErrorMessage = "El precio no es correcto")]
        public int Precio { get; set; }
        public DateTime FechaDisponible { get; set; }
    }

    public class HabitacionViewModel : HabitacionInputModel
    {
        public HabitacionViewModel(Habitacion habitacion)
        {
            IdHabitacion = habitacion.IdHabitacion;
            Tipo = habitacion.Tipo;
            nPersonas = habitacion.nPersonas;
            Estado = habitacion.Estado;
            Precio = habitacion.Precio;
            FechaDisponible = habitacion.FechaDisponible;
        }
    }
}
