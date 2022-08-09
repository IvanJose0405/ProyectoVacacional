using Entity;

namespace proyecto.Models
{
    public class UsuarioInputModel
    {
        public string Username { get; set; }
        public string Tipo { get; set; }

        public string Password { get; set; }

        public string Estado { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string MobilePhone { get; set; }
        public string Token { get; set; }
        
        
        
        
    }

    public class UsuarioViewModel : UsuarioInputModel
    {
        public UsuarioViewModel()
        {

        }

        public UsuarioViewModel(User usuario)
        {
            Username = usuario.UserName;
            Tipo = usuario.Tipo;
            Estado = usuario.Estado;
            FirstName = usuario.FirstName;
            LastName = usuario.LastName;
            Email = usuario.Email;
            MobilePhone = usuario.MobilePhone;
            Token = usuario.Token;
        }
    }
}