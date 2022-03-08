# repos-teste

Primeiro teste - Eleitores, os valores estão fixados imprimindo somente as relações descritas de exemplo.

Segundo teste - BubleSort, os valores são inseridos um por um, até ser inserido o número zero(0), imprimindo o vetor antes da ordenação e depois.

Terceiro teste - Fatorial, é aceito somente um número natural igual a zero(0) ou positivo, imprimindo o valor do cálculo do fatorial deste número.

Quarto teste - Multiplos, é aceito somente um número natural positivo, somando os múltiplos de 3 e 5.

Quinto teste - Cadastro de Veículos


Criei uma api rest com node.js e configurei em um servidor, podendo assim utilizar as rotas abaixo para testar a api


Get - http://34.151.235.44/veiculos/{id} - Retorna os detalhes do veículo

Get - http://34.151.235.44/veiculos?vendido=false - Retorna os veículos não vendidos

Get - http://34.151.235.44/veiculos?created_at=2022-03-07 - Retorna os veículos por data de cadastro

Get - http://34.151.235.44/veiculos?ano=2016 - Retorna os veículos por ano de fabricação

Get - http://34.151.235.44/veiculos?marca=Fiat - Retorna os veículos por marca
(as marcas ainda não estão consistentes, uma forma para isso ser alcançado é criando uma tabela de marcas no banco de dados e comparar as marcas passadas como parametros em uma consulta simples a essa tabela, existindo a marca realiza um join no sql da consulta para buscar as marcas)


Get - http://34.151.235.44/veiculos - Retorna uma lista com todos os veículos inseridos

Put - http://34.151.235.44/veiculos/{id} - Atualiza os dados do veículo

Delete - http://34.151.235.44/veiculos/{id} - Remove o veículo 

Post - http://34.151.235.44/veiculos - insere um veículo

Exemplo:
{
	"veiculo": "Uno",
	"marca": "Fiat",
	"ano" : 2014,
	"descricao": "Popular",
	"vendido": false
}

(A mesma forma para o cadastro de veículos, que ainda é possível cadastrar marcas inconsistentes)
