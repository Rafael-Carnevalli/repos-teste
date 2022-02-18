# repos-teste

Primeiro teste - Eleitores, os valores estão fixados imprimindo somente as relações descritas de exemplo.

Segundo teste - BubleSort, os valores são inseridos um por um, até ser inserido o número zero(0), imprimindo o vetor antes da ordenação e depois.

Terceiro teste - Fatorial, é aceito somente um número natural igual a zero(0) ou positivo, imprimindo o valor do cálculo do fatorial deste número.

Quarto teste - Multiplos, é aceito somente um número natural positivo, somando os múltiplos de 3 e 5.

Quinto teste - Cadastro de Veículos

Post - https://localhost:7166/api/Veiculos - insere um veículo
Exemplo:
{	
	"nomeVeiculo":"Palio",
	"Marca":"Fiat",
	"Ano":2014,
	"Descricao":"Popular",
	"Vendido":true,
	"Created":"2012-03-19T07:22Z",
	"Update": "0000-00-00T00:00Z"
}

Get - https://localhost:7166/api/Veiculos/{id} - Retorna os detalhes do veículo

Get - https://localhost:7166/api/Veiculos - Retorna uma lista com todos os veículos inseridos

Put - https://localhost:7166/api/Veiculos/{id} - Atualiza os dados do veículo

Delete - https://localhost:7166/api/Veiculos/{id} - Remove o veículo 
