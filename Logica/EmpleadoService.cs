using System;
using System.Collections.Generic;
using System.Linq;
using Datos;
using Entity;

namespace Logica
{
    public class EmpleadoService
    {
        private readonly HotelContext _context;

        public EmpleadoService(HotelContext context)
        {
            _context = context;
        }
        public GuardarEmpleadoResponse Guardar(Empleado empleado)
        {
            try
            {
                _context.Empleados.Add(empleado);
                _context.SaveChanges();
                return new GuardarEmpleadoResponse(empleado);
            }
            catch (Exception e)

            {
                return new GuardarEmpleadoResponse($"Error de la Aplicacion: {e.Message}");
            }

        }
        public ConsultaEmpleadoResponse ConsultarTodos()
        {
            try
            {
                List<Empleado> empleados = _context.Empleados.ToList();
                return new ConsultaEmpleadoResponse(empleados);
            }
            catch (Exception e)
            {
                return new ConsultaEmpleadoResponse($"Error en la aplicacion:  {e.Message}");
            }
        }

        public Empleado BuscarxIdentificacion(string cedula)
        {
            Empleado empleado = _context.Empleados.Find(cedula);
            return empleado;
        }

        public string Eliminar(string cedula)
        {
            Empleado empleado = new Empleado();
            if ((empleado = _context.Empleados.Find(cedula)) != null)
            {
                _context.Empleados.Remove(empleado);
                _context.SaveChanges();
                return $"Se ha eliminado al empleado.";
            }
            else
            {
                return $"No se encontro el empleado. ";
            }
        }

        public class ConsultaEmpleadoResponse
        {

            public ConsultaEmpleadoResponse(List<Empleado> empleados)
            {
                Error = false;
                Empleados = empleados;
            }

            public ConsultaEmpleadoResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }
            public Boolean Error { get; set; }
            public string Mensaje { get; set; }
            public List<Empleado> Empleados { get; set; }
        }
        public class GuardarEmpleadoResponse

        {

            public GuardarEmpleadoResponse(Empleado empleado)

            {
                Error = false;

                Empleado = empleado;

            }



            public GuardarEmpleadoResponse(string mensaje)

            {
                Error = true;
                Mensaje = mensaje;
            }

            public bool Error { get; set; }

            public string Mensaje { get; set; }

            public Empleado Empleado { get; set; }

        }
    }
}