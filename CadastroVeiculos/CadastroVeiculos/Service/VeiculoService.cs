using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CadastroVeiculos.Service
{
    public class VeiculoService
    {
        private readonly VeiculoContext _context;
        public VeiculoService(VeiculoContext context)
        {
            _context = context;
        }
        public async Task<List<Veiculo>> GetVeiculos(string vendido = "", string marca = "", string created = "", string ano = "")
        {
            List<Veiculo> teste = new List<Veiculo>();

            // quantos veículos estão como vendidos ou não
            if (vendido != null && marca == null && created == null && ano == null)
            {
                teste = _context.VeiculoItems.FromSqlInterpolated($"select * from dbo.VeiculoItems where Vendido = {vendido}").ToList();
            }
            // veículos por data
            else if (vendido == null && marca == null && created != null && ano == null)
            {
                created += "%";
                teste = _context.VeiculoItems.FromSqlInterpolated($"select * from dbo.VeiculoItems where Created like {created}").ToList();
            }
            // veículos por ano
            else if (vendido == null && marca == null && created == null && ano != null)
            {
                teste = _context.VeiculoItems.FromSqlInterpolated($"select * from dbo.VeiculoItems where Ano = {ano}").ToList();
            } 
            // veículos por marca
            else if (vendido == null && marca != null && created == null && ano == null)
            {
                teste = _context.VeiculoItems.FromSqlInterpolated($"select * from dbo.VeiculoItems where Marca = {marca}").ToList();
            }
            // todos os veículos
            else
            {
                teste = _context.VeiculoItems.FromSqlInterpolated($"select * from dbo.VeiculoItems").ToList();
            }
            return teste;
        }

        public async Task<string> DeleteVeiculo(long id)
        {
            var veiculo = await _context.VeiculoItems.FindAsync(id);
            if (veiculo == null)
            {
                return "Not Found";
            }
            _context.VeiculoItems.Remove(veiculo);
            await _context.SaveChangesAsync();

            return "";
        }

        public async Task<string> PutVeiculo(long id, Veiculo veiculo)
        {
            if (id != veiculo.Id)
            {
                return "BadRequest";
            }
            veiculo.Updated = DateTime.Now;

            _context.Entry(veiculo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VeiculoExists(id))
                {
                    return "NotFound";
                }
                else
                {
                    throw;
                }
            }
            return "";
        }

        private bool VeiculoExists(long id)
        {
            return _context.VeiculoItems.Any(e => e.Id == id);
        }
    }
}
