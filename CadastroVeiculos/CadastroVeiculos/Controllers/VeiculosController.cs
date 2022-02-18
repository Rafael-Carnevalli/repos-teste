#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CadastroVeiculos.Models;

namespace CadastroVeiculos.Controllers
{
    [Route("api/veiculos")]
    [ApiController]
    public class VeiculosController : ControllerBase
    {
        private readonly VeiculoContext _context;

        public VeiculosController(VeiculoContext context)
        {
            _context = context;
        }

        // GET: api/Veiculos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Veiculo>>> GetVeiculoItems()
        {

            return await _context.VeiculoItems.ToListAsync();
        }

        // GET: api/Veiculos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Veiculo>> GetVeiculo(long id, string marca = "", int ano = 0)
        {
            var veiculo = await _context.VeiculoItems.FindAsync(id);

            if (veiculo == null)
            {
                return NotFound();
            }

            return veiculo;
        }

        // PUT: api/Veiculos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVeiculo(long id, Veiculo veiculo)
        {
            if (id != veiculo.Id)
            {
                return BadRequest();
            }

            _context.Entry(veiculo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VeiculoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Veiculos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Veiculo>> PostVeiculo(Veiculo veiculo)
        {
            _context.VeiculoItems.Add(veiculo);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetVeiculo), new { id = veiculo.Id }, veiculo);
        }

        // DELETE: api/Veiculos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVeiculo(long id)
        {
            var veiculo = await _context.VeiculoItems.FindAsync(id);
            if (veiculo == null)
            {
                return NotFound();
            }

            _context.VeiculoItems.Remove(veiculo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VeiculoExists(long id)
        {
            return _context.VeiculoItems.Any(e => e.Id == id);
        }
    }
}
