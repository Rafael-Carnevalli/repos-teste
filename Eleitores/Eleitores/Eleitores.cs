using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eleitores
{
    internal class Eleitores
    {
        protected int totalEleitores;
        protected int votosValidos;
        protected int votosNulos;
        protected int votosBrancos;

        public Eleitores(int totalEleitores, int votosValidos, int votosNulos, int votosBrancos)
        {
            this.totalEleitores = totalEleitores;
            this.votosValidos = votosValidos;
            this.votosNulos = votosNulos;
            this.votosBrancos = votosBrancos;
        }

        public string relacaoValidos()
        {
            return ((float)votosValidos / totalEleitores * 100).ToString("F2", CultureInfo.InvariantCulture) + "%";
        }
        public string relacaoNulos()
        {
            return ((float)votosNulos / totalEleitores * 100).ToString("F2", CultureInfo.InvariantCulture) + "%";
        }
        public string relacaoBrancos()
        {
            return ((float)votosBrancos / totalEleitores * 100).ToString("F2", CultureInfo.InvariantCulture) + "%";
        }
    }
}
