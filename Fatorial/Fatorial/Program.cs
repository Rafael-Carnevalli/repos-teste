﻿namespace Fatorial
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(Fatorial.NumNegativo(n) ? "Número negativo!" : Fatorial.CalculaFatorial(n).ToString());
        }
    }
}