using Datos;
using Logica;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using proyecto.Config;
using proyecto.Models;
using proyecto.Service;
namespace proyecto.Controllers
{
    [Authorize]
   [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private ServiciosJwt _servicioJwt;
        private UserService _servicioUsuario;

        private readonly HotelContext _context;
        public LoginController(HotelContext context, IOptions<AppSetting> appSettings)
        {
            _context = context;
            var admin = _context.Users.Find("admin");
            if (admin == null)
            {
                _context.Users.Add(new Entity.User { UserName = "admin", Tipo = "Administrador", Password = "admin", Estado = "Activo"});
                var i = _context.SaveChanges();
            }
            _servicioJwt = new ServiciosJwt(appSettings);
            _servicioUsuario = new UserService(context);
        }
        
        [AllowAnonymous]
        [HttpPost()]
        public ActionResult Login(UsuarioInputModel model)
        {
            var user = _servicioUsuario.Validate( model.Username, model.Password);
            if (user == null)
            {
                ModelState.AddModelError("Acceso Denegado", "Usuario y/o contraseña incorrectos");
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status401Unauthorized,
                };
                return Unauthorized(problemDetails);
            }
            var response = _servicioJwt.GenerarToken(user);
            return Ok(response);
        }
    }
}