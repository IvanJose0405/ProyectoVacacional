using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Datos.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Habitaciones",
                columns: table => new
                {
                    IdHabitacion = table.Column<string>(type: "varchar(4)", nullable: false),
                    Tipo = table.Column<string>(type: "varchar(8)", nullable: true),
                    nPersonas = table.Column<int>(type: "int", nullable: false),
                    Estado = table.Column<string>(type: "varchar(13)", nullable: true),
                    Precio = table.Column<decimal>(type: "decimal", nullable: false),
                    FechaDisponible = table.Column<DateTime>(type: "datetime", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Habitaciones", x => x.IdHabitacion);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserName = table.Column<string>(nullable: false),
                    Tipo = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    Estado = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    MobilePhone = table.Column<string>(nullable: true),
                    Token = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserName);
                });

            migrationBuilder.CreateTable(
                name: "Personas",
                columns: table => new
                {
                    Cedula = table.Column<string>(type: "varchar(13)", nullable: false),
                    Nombre = table.Column<string>(type: "varchar(25)", nullable: true),
                    Apellido = table.Column<string>(type: "varchar(25)", nullable: true),
                    Sexo = table.Column<string>(type: "varchar(10)", nullable: true),
                    Edad = table.Column<int>(type: "int", nullable: false),
                    Telefono = table.Column<string>(type: "varchar(13)", nullable: true),
                    Email = table.Column<string>(type: "varchar(40)", nullable: true),
                    Ciudad = table.Column<string>(type: "varchar(25)", nullable: true),
                    UserName = table.Column<string>(nullable: true),
                    Discriminator = table.Column<string>(nullable: false),
                    IdCliente = table.Column<string>(type: "varchar(13)", nullable: true),
                    IdHabitacion = table.Column<string>(type: "varchar(4)", nullable: true),
                    Ppal = table.Column<string>(type: "varchar(13)", nullable: true),
                    IdEmpleado = table.Column<string>(type: "varchar(13)", nullable: true),
                    Cargo = table.Column<string>(type: "varchar(15)", nullable: true),
                    Jornada = table.Column<string>(type: "varchar(8)", nullable: true),
                    Jefe = table.Column<string>(type: "varchar(13)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Personas", x => x.Cedula);
                    table.ForeignKey(
                        name: "FK_Personas_Habitaciones_IdHabitacion",
                        column: x => x.IdHabitacion,
                        principalTable: "Habitaciones",
                        principalColumn: "IdHabitacion",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Personas_Personas_Ppal",
                        column: x => x.Ppal,
                        principalTable: "Personas",
                        principalColumn: "Cedula",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Personas_Personas_Jefe",
                        column: x => x.Jefe,
                        principalTable: "Personas",
                        principalColumn: "Cedula",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Personas_Users_UserName",
                        column: x => x.UserName,
                        principalTable: "Users",
                        principalColumn: "UserName",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Reservas",
                columns: table => new
                {
                    IdReserva = table.Column<string>(type: "varchar(4)", nullable: false),
                    Cedula = table.Column<string>(type: "varchar(13)", nullable: true),
                    IdHabitacion = table.Column<string>(type: "varchar(4)", nullable: true),
                    FechaReserva = table.Column<DateTime>(type: "datetime", nullable: false),
                    Iva = table.Column<decimal>(type: "decimal", nullable: false),
                    Total = table.Column<decimal>(type: "decimal", nullable: false),
                    SubTotal = table.Column<decimal>(type: "decimal", nullable: false),
                    FechaEntrada = table.Column<DateTime>(type: "datetime", nullable: false),
                    FechaSalida = table.Column<DateTime>(type: "datetime", nullable: false),
                    Dias = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reservas", x => x.IdReserva);
                    table.ForeignKey(
                        name: "FK_Reservas_Personas_Cedula",
                        column: x => x.Cedula,
                        principalTable: "Personas",
                        principalColumn: "Cedula",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Reservas_Habitaciones_IdHabitacion",
                        column: x => x.IdHabitacion,
                        principalTable: "Habitaciones",
                        principalColumn: "IdHabitacion",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Personas_IdHabitacion",
                table: "Personas",
                column: "IdHabitacion");

            migrationBuilder.CreateIndex(
                name: "IX_Personas_Ppal",
                table: "Personas",
                column: "Ppal");

            migrationBuilder.CreateIndex(
                name: "IX_Personas_Jefe",
                table: "Personas",
                column: "Jefe");

            migrationBuilder.CreateIndex(
                name: "IX_Personas_UserName",
                table: "Personas",
                column: "UserName");

            migrationBuilder.CreateIndex(
                name: "IX_Reservas_Cedula",
                table: "Reservas",
                column: "Cedula");

            migrationBuilder.CreateIndex(
                name: "IX_Reservas_IdHabitacion",
                table: "Reservas",
                column: "IdHabitacion");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Reservas");

            migrationBuilder.DropTable(
                name: "Personas");

            migrationBuilder.DropTable(
                name: "Habitaciones");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
