using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BubleSort
{
    class Chave
    {
        public int chave;
        public Chave()
        {
            chave = 0;
        }
        public Chave(int chave)
        {
            this.chave = chave;
        }
    }

    class listChaves
    {
        public List<Chave> listChave;
        public listChaves()
        {
            listChave = new List<Chave>();
        }
        public listChaves(List<Chave> listChave)
        {
            this.listChave = listChave;
        }
        public void insere()
        {
            Chave item;
            while (true)
            {
                item = new Chave(Convert.ToInt32(Console.ReadLine()));
                if (item.chave == 0)
                {
                    break;
                }
                listChave.Add(item);
            }
        }
        public void Ordenar()
        {
            Chave aux = new Chave();
            for (int i = 0; i < listChave.Count - 1; i++)
            {
                for (var j = listChave.Count - 1; j > i; j--)
                {
                    if (ehMaior(listChave, j))
                    {
                        aux = listChave[j];
                        listChave[j] = listChave[j - 1];
                        listChave[j - 1] = aux;
                    }
                }
            }
        }
        private bool ehMaior(List<Chave> vetor, int j)
        {
            return vetor[j].chave < vetor[j - 1].chave;
        }
        public void imprime()
        {
            List<string> stListChave = new List<string>();
            foreach (var chave in listChave)
            {
                stListChave.Add(chave.chave.ToString());
            }
            Console.WriteLine(string.Join(" - ", stListChave));
        }
    }
}
