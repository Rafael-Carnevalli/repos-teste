using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace CadastroVeiculos.Models
{
    public class VeiculoContext : DbContext
    {
        public VeiculoContext(DbContextOptions<VeiculoContext> options)
            : base(options)
        {
        }

        public DbSet<Veiculo> VeiculoItems { get; set; } = null!;
    }
}