using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Multiplos
{
    internal class Multiplos
    {
        public static int CalculaMultiplos(int x)
        {
            int soma = 0;
            for (int i = 1; i < x; i++)
            {
                if(i % 3 == 0)
                    soma += i;
                else if(i % 5 == 0)
                    soma += i;
            }
            return soma;
        }
    }
}