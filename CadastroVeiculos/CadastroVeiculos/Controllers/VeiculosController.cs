#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CadastroVeiculos.Models;
using CadastroVeiculos.Service;

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
        public async Task<ActionResult<IEnumerable<Veiculo>>> GetVeiculoItems(string marca, string vendido, string created, string ano)
        {
            VeiculoService veiculoService = new VeiculoService(_context);
            return Ok(await veiculoService.GetVeiculos(vendido, marca, created, ano));
        }

        // GET: api/Veiculos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Veiculo>> GetVeiculo(long id)
        {
            var veiculo = await _context.VeiculoItems.FindAsync(id);
            if (veiculo == null)
            {
                return NotFound();
            }

            return veiculo;
        }

        // PUT: api/Veiculos/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVeiculo(long id, Veiculo veiculo)
        {
            VeiculoService veiculoService = new VeiculoService(_context);
            var msg = await veiculoService.PutVeiculo(id, veiculo);
            return msg == "" ? NoContent() : msg == "BadRequest" ? BadRequest() : NotFound();
        }

        // POST: api/Veiculos
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
            VeiculoService veiculoService = new VeiculoService(_context);
            return await veiculoService.DeleteVeiculo(id) == "Not Found" ? NotFound() : NoContent();
        }
    }
}
