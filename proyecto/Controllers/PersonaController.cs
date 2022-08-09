using Microsoft.AspNetCore.Mvc;
using Logica;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Linq;
using Entity;
using Datos;
using PersonaModel;
using Microsoft.AspNetCore.Authorization;

[Authorize]
[Route("api/[controller]")]
[ApiController]
public class PersonaController : ControllerBase
{
    private readonly PersonaService _personaService;
    public IConfiguration Configuration { get; }
    public PersonaController(HotelContext context)
    {
        _personaService = new PersonaService(context);
    }
    // GET: api/Persona​
    [HttpGet]
    public ActionResult<PersonaViewModel> Gets()
    {
        var response = _personaService.ConsultarTodos();
        if (response.Error)
        {
            return BadRequest(response.Mensaje);
        }
        else
        {
            return Ok(response.Personas.Select(p => new PersonaViewModel(p)));
        }
    }
    // GET: api/Persona/5​
    [HttpGet("{cedula}")]
    public ActionResult<PersonaViewModel> Get(string cedula)
    {
        var persona = _personaService.BuscarxIdentificacion(cedula);
        if (persona == null) return NotFound();
        var personaViewModel = new PersonaViewModel(persona);
        return personaViewModel;
    }

    // POST: api/Persona​

    [HttpPost]
    public ActionResult<PersonaViewModel> Post(PersonaInputModel personaInput)
    {
        Persona persona = MapearPersona(personaInput);
        var response = _personaService.Guardar(persona);
        if (response.Error)
        {
            return BadRequest(response.Mensaje);
        }
        return Ok(response.Persona);
    }

    // DELETE: api/Persona/5​

    [HttpDelete("{cedula}")]
    public ActionResult<string> Delete(string cedula)
    {
        string mensaje = _personaService.Eliminar(cedula);
        return Ok(mensaje);
    }

    private Persona MapearPersona(PersonaInputModel personaInput)
    {
        var persona = new Persona
        {
            Cedula = personaInput.Cedula, 
            Nombre = personaInput.Nombre,
            Apellido =personaInput.Apellido,
            Sexo = personaInput.Sexo,
            Edad = personaInput.Edad,
            Email = personaInput.Email,
            Telefono = personaInput.Telefono,
            Ciudad = personaInput.Ciudad
        };
        return persona;
    }
}