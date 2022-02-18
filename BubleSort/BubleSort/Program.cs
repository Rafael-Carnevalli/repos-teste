namespace BubleSort
{
    class Program
    {
        static void Main(string[] args)
        {
            listChaves vetor = new listChaves();
            vetor.insere();
            Console.WriteLine("Vetor antes da ordenação");
            vetor.imprime();
            vetor.Ordenar();
            Console.WriteLine("Vetor depois da ordenação");
            vetor.imprime();
        }
    }
}








