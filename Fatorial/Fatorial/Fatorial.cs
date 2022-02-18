using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fatorial
{
    internal class Fatorial
    {
        public static int CalculaFatorial(int n)
        {
            if (n == 0 || n == 1)
            {
                return 1;
            }
            else
            {
                return n * CalculaFatorial(n - 1);
            }
        }
        public static bool NumNegativo(int n)
        {
            return (n < 0);
        }
    }
}