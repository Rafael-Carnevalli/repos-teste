namespace CadastroVeiculos.Models
{
    public class Veiculo
    {
        public long Id { get; set; }
        public string? NomeVeiculo { get; set; }
        public string? Marca { get; set; }
        public int Ano { get; set; }
        public string? Descricao { get; set; }
        public bool Vendido { get; set; }
        public DateTime? Created { get; set; } = DateTime.Now;
        public DateTime? Updated { get; set; } = DateTime.MinValue;
    }
}
