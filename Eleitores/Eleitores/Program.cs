namespace Eleitores
{
    class Program
    {
        static void Main(string[] args)
        {
            Eleitores eleitores = new Eleitores(1000, 800, 150, 50);
            Console.WriteLine(eleitores.relacaoValidos());
            Console.WriteLine(eleitores.relacaoNulos());
            Console.WriteLine(eleitores.relacaoBrancos());
        }
    }
}