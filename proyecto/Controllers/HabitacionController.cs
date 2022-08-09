using System.Net;
using Microsoft.AspNetCore.Mvc;
using Logica;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Linq;
using Entity;
using Datos;
using HabitacionModel;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using proyecto.Hubs;
using Microsoft.AspNetCore.Authorization;

[Authorize]
[Route("api/[controller]")]
[ApiController]
public class HabitacionController : ControllerBase
{
    private readonly HabitacionService _habitacionService;
    private readonly IHubContext<SignalHub> _hubContext;
    public HabitacionController(HotelContext context,IHubContext<SignalHub> hubContext)
    {
        _habitacionService = new HabitacionService(context);
        _hubContext = hubContext;
    }
    // GET: api/Persona​
    [HttpGet]
    public  ActionResult<HabitacionViewModel> Gets()
    {
        var response = _habitacionService.ConsultarTodos();
        if (response.Error)
        {
            return BadRequest(response.Mensaje);
        }
        else
        {
            return Ok(response.Habitaciones.Select(p => new HabitacionViewModel(p)));
        }
    }
    // GET: api/Persona/5​
    [HttpGet("{idhabitacion}")]
    public ActionResult<HabitacionViewModel> Get(string idhabitacion)
    {
        var habitacion = _habitacionService.BuscarxIdentificacion(idhabitacion);
        if (habitacion == null) return NotFound();
        var habitacionViewModel = new HabitacionViewModel(habitacion);
        return habitacionViewModel;
    }

    // POST: api/Persona​

    [HttpPost]
    public async Task<ActionResult<HabitacionViewModel>> Post(HabitacionInputModel habitacionInput)
    {
        Habitacion habitacion = MapearHabitacion(habitacionInput);
        var response = _habitacionService.Guardar(habitacion);
        if (response.Error)
        {
            return BadRequest(response.Mensaje);
        }
        var habitacionview = new HabitacionViewModel (response.Habitacion);
        await _hubContext.Clients.All.SendAsync("habitacionRegistrada", habitacionview);
        return Ok (habitacionview);
    }

    // DELETE: api/Persona/5​

    [HttpDelete("{idhabitacion}")]
    public ActionResult<string> Delete(string idhabitacion)
    {
        string mensaje = _habitacionService.Eliminar(idhabitacion);
        return Ok(mensaje);
    }

    private Habitacion MapearHabitacion(HabitacionInputModel habitacionInput)
    {
        var habitacion = new Habitacion
        {
            IdHabitacion = habitacionInput.IdHabitacion,
            Tipo = habitacionInput.Tipo,
            nPersonas = habitacionInput.nPersonas,
            Estado = habitacionInput.Estado,
            Precio = habitacionInput.Precio,
        };
        return habitacion;
    }
}