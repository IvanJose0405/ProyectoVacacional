using System;
using System.Collections.Generic;
using System.Linq;
using Datos;
using Entity;

namespace Logica
{
    public class ClienteService
    {
        private readonly HotelContext _context;

        public ClienteService(HotelContext context)
        {
            _context = context;
        }
        public GuardarClienteResponse Guardar(Cliente cliente)
        {
            try
            {
                _context.Clientes.Add(cliente);
                _context.SaveChanges();
                return new GuardarClienteResponse(cliente);
            }
            catch (Exception e)

            {
                return new GuardarClienteResponse($"Error de la Aplicacion: {e.Message}");
            }

        }
        public ConsultaClienteResponse ConsultarTodos()
        {
            try
            {
                List<Cliente> clientes = _context.Clientes.ToList();
                return new ConsultaClienteResponse(clientes);
            }
            catch (Exception e)
            {
                return new ConsultaClienteResponse($"Error en la aplicacion:  {e.Message}");
            }
        }

        public Cliente BuscarxIdentificacion(string cedula)
        {
            Cliente cliente = _context.Clientes.Find(cedula);
            return cliente;
        }

        public string Eliminar(string cedula)
        {
            Cliente cliente = new Cliente();
            if ((cliente = _context.Clientes.Find(cedula)) != null)
            {
                _context.Clientes.Remove(cliente);
                _context.SaveChanges();
                return $"Se ha eliminado la persona.";
            }
            else
            {
                return $"No se encontro la persona. ";
            }
        }

        public class ConsultaClienteResponse
        {

            public ConsultaClienteResponse(List<Cliente> clientes)
            {
                Error = false;
                Clientes = clientes;
            }

            public ConsultaClienteResponse(string mensaje)
            {
                Error = true;
                Mensaje = mensaje;
            }
            public Boolean Error { get; set; }
            public string Mensaje { get; set; }
            public List<Cliente> Clientes { get; set; }
        }
        public class GuardarClienteResponse

        {

            public GuardarClienteResponse(Cliente cliente)

            {
                Error = false;

                Cliente = cliente;

            }



            public GuardarClienteResponse(string mensaje)

            {
                Error = true;
                Mensaje = mensaje;
            }

            public bool Error { get; set; }

            public string Mensaje { get; set; }

            public Cliente Cliente { get; set; }

        }

    }
}