using System;
using System.Collections.Generic;
using System.Linq;
using Datos;
using Entity;

namespace Logica
{
    public class HabitacionService
    {
        private readonly HotelContext _context;

        public HabitacionService(HotelContext context)
        {
            _context = context;
        }
        public GuardarHabitacionResponse Guardar(Habitacion habitacion)
        {
            try
            {
                //habitacion.IdHabitacion = (_context.Habitaciones.ToList().Count+1).ToString();
                habitacion.FechaDisponible = DateTime.Now;
                _context.Habitaciones.Add(habitacion);
                _context.SaveChanges();
                return new GuardarHabitacionResponse(habitacion);
            }
            catch (Exception e)

            {
                return new GuardarHabitacionResponse($"Error de la Aplicacion: {e.Message}");
            }

        }
        public ConsultaHabitacionResponse ConsultarTodos()
        {
            try
            {
                List<Habitacion> habitaciones = _context.Habitaciones.ToList();
                return new ConsultaHabitacionResponse(habitaciones);
            }
            catch (Exception e)
            {
                return new ConsultaHabitacionResponse($"Error en la aplicacion:  {e.Message}");
            }
        }

        public Habitacion BuscarxIdentificacion(string idhabitacion)
        {
            Habitacion habitacion = _context.Habitaciones.Find(idhabitacion);
            return habitacion;
        }

        public string Eliminar(string idhabitacion)
        {
            Habitacion habitacion = new Habitacion();
            if ((habitacion = _context.Habitaciones.Find(idhabitacion)) != null)
            {
                _context.Habitaciones.Remove(habitacion);
                _context.SaveChanges();
                return $"Se ha eliminado la habitacion.";
            }
            else
            {
                return $"No se encontro la habitacion. ";
            }
        }

        public class ConsultaHabitacionResponse
        {

            public ConsultaHabitacionResponse(List<Habitacion> habitaciones)
            {
                Error = false;
                Habitaciones = habitaciones;
            }

            public ConsultaHabitacionResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }
            public Boolean Error { get; set; }
            public string Mensaje { get; set; }
            public List<Habitacion> Habitaciones { get; set; }
        }
        public class GuardarHabitacionResponse

        {

            public GuardarHabitacionResponse(Habitacion habitacion)

            {
                Error = false;

                Habitacion = habitacion;

            }



            public GuardarHabitacionResponse(string mensaje)

            {
                Error = true;
                Mensaje = mensaje;
            }

            public bool Error { get; set; }

            public string Mensaje { get; set; }

            public Habitacion Habitacion { get; set; }

        }
    }
}