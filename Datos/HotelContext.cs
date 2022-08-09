using Entity;
using Microsoft.EntityFrameworkCore;

namespace Datos
{
    public class HotelContext : DbContext
    {
        public HotelContext(DbContextOptions options) :
            base(options)
        {
            
        }

        public DbSet<Cliente> Clientes { get; set; }

        public DbSet<Empleado> Empleados { get; set; }

        public DbSet<Reserva> Reservas { get; set; }

        public DbSet<Habitacion> Habitaciones { get; set; }

        public DbSet<Persona> Personas { get; set; }

        public DbSet<User> Users { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<Cliente>()
                .HasOne<Cliente>()
                .WithMany()
                .HasForeignKey(p => p.Ppal);

            modelBuilder
                .Entity<Cliente>()
                .HasOne<Persona>()
                .WithMany()
                .HasForeignKey(p => p.Cedula);

            modelBuilder
                .Entity<Cliente>()
                .HasOne<Habitacion>()
                .WithMany()
                .HasForeignKey(p => p.IdHabitacion);

            modelBuilder
                .Entity<Empleado>()
                .HasOne<Persona>()
                .WithMany()
                .HasForeignKey(p => p.Cedula);

            modelBuilder
                .Entity<Empleado>()
                .HasOne<Empleado>()
                .WithMany()
                .HasForeignKey(p => p.Jefe);

            modelBuilder
                .Entity<Reserva>()
                .HasOne<Cliente>()
                .WithMany()
                .HasForeignKey(p => p.Cedula);

            modelBuilder
                .Entity<Reserva>()
                .HasOne<Habitacion>()
                .WithMany()
                .HasForeignKey(p => p.IdHabitacion);
        }
    }
}
