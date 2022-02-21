# repos-teste

Primeiro teste - Eleitores, os valores estão fixados imprimindo somente as relações descritas de exemplo.

Segundo teste - BubleSort, os valores são inseridos um por um, até ser inserido o número zero(0), imprimindo o vetor antes da ordenação e depois.

Terceiro teste - Fatorial, é aceito somente um número natural igual a zero(0) ou positivo, imprimindo o valor do cálculo do fatorial deste número.

Quarto teste - Multiplos, é aceito somente um número natural positivo, somando os múltiplos de 3 e 5.

Quinto teste - Cadastro de Veículos



Get - https://localhost:7166/api/Veiculos/{id} - Retorna os detalhes do veículo

Get - https://localhost:7166/api/Veiculos?Vendido=false - Retorna os veículos não vendidos

Get - https://localhost:7166/api/Veiculos?created=2022-02-20 - Retorna os veículos por data de cadastro

Get - https://localhost:7166/api/Veiculos?ano=2016 - Retorna os veículos por ano de fabricação

Get - https://localhost:7166/api/Veiculos?marca=Fiat - Retorna os veículos por marca
(as marcas ainda não estão consistentes, uma forma para isso ser alcançado é criando uma tabela de marcas no banco de dados e comparar as marcas passadas como parametros em uma consulta simples a essa tabela, existindo a marca realiza um join no sql da consulta para buscar as marcas)


Get - https://localhost:7166/api/Veiculos - Retorna uma lista com todos os veículos inseridos

Put - https://localhost:7166/api/Veiculos/{id} - Atualiza os dados do veículo

Delete - https://localhost:7166/api/Veiculos/{id} - Remove o veículo 

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
(A mesma forma para o cadastro de veículos, que ainda é possível cadastrar marcas inconsistentes)