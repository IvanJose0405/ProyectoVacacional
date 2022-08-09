using System;
using System.Collections.Generic;
using System.Linq;
using Datos;
using Entity;

namespace Logica
{
    public class PersonaService
    {
        private readonly HotelContext _context;

        public PersonaService(HotelContext context)
        {
            _context = context;
        }
        public GuardarPersonaResponse Guardar(Persona persona)
        {
            try
            {
                _context.Personas.Add(persona);
                _context.SaveChanges();
                return new GuardarPersonaResponse(persona);
            }
            catch (Exception e)

            {
                return new GuardarPersonaResponse($"Error de la Aplicacion: {e.Message}");
            }

        }
        public ConsultaPersonaResponse ConsultarTodos()
        {
            try
            {
                List<Persona> personas = _context.Personas.ToList();
                return new ConsultaPersonaResponse(personas);
            }
            catch (Exception e)
            {
                return new ConsultaPersonaResponse($"Error en la aplicacion:  {e.Message}");
            }
        }

        public Persona BuscarxIdentificacion(string cedula)
        {
            Persona persona = _context.Personas.Find(cedula);
            return persona;
        }

        public string Eliminar(string cedula)
        {
            Persona persona = new Persona();
            if ((persona = _context.Personas.Find(cedula)) != null)
            {
                _context.Personas.Remove(persona);
                _context.SaveChanges();
                return $"Se ha eliminado la persona.";
            }
            else
            {
                return $"No se encontro la persona. ";
            }
        }

        public class ConsultaPersonaResponse
        {

            public ConsultaPersonaResponse(List<Persona> personas)
            {
                Error = false;
                Personas = personas;
            }

            public ConsultaPersonaResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }
            public Boolean Error { get; set; }
            public string Mensaje { get; set; }
            public List<Persona> Personas { get; set; }
        }
        public class GuardarPersonaResponse

        {

            public GuardarPersonaResponse(Persona persona)

            {
                Error = false;

                Persona = persona;

            }



            public GuardarPersonaResponse(string mensaje)

            {
                Error = true;
                Mensaje = mensaje;
            }

            public bool Error { get; set; }

            public string Mensaje { get; set; }

            public Persona Persona { get; set; }

        }
    }
}