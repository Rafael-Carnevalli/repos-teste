# repos-teste

Primeiro teste - Eleitores, os valores estão fixados imprimindo somente as relações descritas de exemplo.

Segundo teste - BubleSort, os valores são inseridos um por um, até ser inserido o número zero(0), imprimindo o vetor antes da ordenação e depois.

Terceiro teste - Fatorial, é aceito somente um número natural igual a zero(0) ou positivo, imprimindo o valor do cálculo do fatorial deste número.

Quarto teste - Multiplos, é aceito somente um número natural positivo, somando os múltiplos de 3 e 5.





Quinto teste - API_NODE está a apirest e front_Consumir_Api está o front (ainda não concluído)





O Front ainda não coloquei no servidor, pois ainda não gerei um domínio para executa-lo no mesmo, atualmente é possível cadastrar, editar e visualizar todos os veículos cadastrados, faltando pesquisar por um filtro, e o nome das marcas ainda não está consistente.


Criei uma api rest com node.js e configurei em um servidor http://34.151.235.44, podendo assim utilizar as rotas abaixo para testar a api


EXEMPLOS das chamadas das rotas:

Get - http://34.151.235.44/veiculos/{id} - Retorna os detalhes do veículo

Get - http://34.151.235.44/veiculos?vendido=false - Retorna os veículos não vendidos

Get - http://34.151.235.44/veiculos?created_at=2022-03-07 - Retorna os veículos por data de cadastro

Get - http://34.151.235.44/veiculos?ano=2016 - Retorna os veículos por ano de fabricação

Get - http://34.151.235.44/veiculos?marca=Fiat - Retorna os veículos por marca
(as marcas ainda não estão consistentes, uma forma para isso ser alcançado é criando uma tabela de marcas no banco de dados e comparar as marcas passadas como parametros em uma consulta simples a essa tabela, então, se existir a marca realiza um join no sql da consulta com a tabela de marcas e busca ou adiciona um novo veículo).


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
