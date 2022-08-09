using System.Net;
using Microsoft.AspNetCore.Mvc;
using Logica;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Linq;
using Entity;
using Datos;
using EmpleadoModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;

[Authorize]
[Route("api/[controller]")]
[ApiController]

public class EmpleadoController : ControllerBase
{
    private readonly EmpleadoService _empleadoService;
    public IConfiguration Configuration { get; }
    public EmpleadoController(HotelContext context)
    {
        _empleadoService = new EmpleadoService(context);
    }
    // GET: api/Persona​
    [HttpGet]
    public ActionResult<EmpleadoViewModel> Gets()
    {
        var response = _empleadoService.ConsultarTodos();
        if (response.Error)
        {
            ModelState
            .AddModelError("Error al consultar empleado", response.Mensaje);
            var detallesproblemas = new ValidationProblemDetails(ModelState);
            detallesproblemas.Status = StatusCodes.Status500InternalServerError;
            return BadRequest(detallesproblemas);
        }
        else
        {
            return Ok(response.Empleados.Select(p => new EmpleadoViewModel(p)));
        }
    }
    // GET: api/Persona/5​
    [HttpGet("{idempleado}")]
    public ActionResult<EmpleadoViewModel> Get(string idempleado)
    {
        var empleado = _empleadoService.BuscarxIdentificacion(idempleado);
        if (empleado == null) return NotFound();
        var empleadoViewModel = new EmpleadoViewModel(empleado);
        return empleadoViewModel;
    }

    // POST: api/Persona​

    [HttpPost]
    public ActionResult<EmpleadoViewModel> Post(EmpleadoInputModel empleadoInput)
    {
        Empleado empleado = MapearEmpleado(empleadoInput);
        var response = _empleadoService.Guardar(empleado);
        if (response.Error)
        {
            ModelState
            .AddModelError("Error al guardar empleado", response.Mensaje);
            var detallesproblemas = new ValidationProblemDetails(ModelState);
            detallesproblemas.Status = StatusCodes.Status500InternalServerError;
            return BadRequest(detallesproblemas);
        }
        return Ok(response.Empleado);
    }

    // DELETE: api/Persona/5​

    [HttpDelete("{idempleado}")]
    public ActionResult<string> Delete(string idempleado)
    {
        string mensaje = _empleadoService.Eliminar(idempleado);
        return Ok(mensaje);
    }

    private Empleado MapearEmpleado(EmpleadoInputModel empleadoInput)
    {
        var empleado = new Empleado
        {
            Cedula = empleadoInput.Cedula,
            IdEmpleado = empleadoInput.Cedula,
            Nombre=empleadoInput.Nombre,
            Apellido=empleadoInput.Apellido,
            Edad = empleadoInput.Edad,
            Sexo = empleadoInput.Sexo,
            Email = empleadoInput.Email,
            Telefono = empleadoInput.Telefono,
            Ciudad = empleadoInput.Ciudad,
            Jefe = empleadoInput.Cedula,
            Cargo = empleadoInput.Cargo,
            Jornada = empleadoInput.Jornada,
            User = empleadoInput.User
        };
        return empleado;
    }
}