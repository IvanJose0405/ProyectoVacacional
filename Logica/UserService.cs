using Datos;
using Entity;
using System;
using System.Linq;

namespace Logica
{
    public class UserService
    {
        private readonly HotelContext _context;



        public UserService(HotelContext context)=> _context = context;



        public User Validate(string userName, string password)
        {

            return _context.Users.FirstOrDefault(t => t.UserName == userName && t.Password == password && t.Estado == "Activo");

        }
    }
}