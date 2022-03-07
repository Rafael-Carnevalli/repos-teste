import Veiculos from "../models/Veiculos";
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
const { QueryTypes } = require('@sequelize/core');

const connection = new Sequelize(databaseConfig);


class VeiculosController {
  async index(req, res) {
    let todosVeiculos;
    let query = "SELECT * FROM veiculos.veiculos WHERE ";
    if(req.query.vendido == 'false'){
      query += `vendido = 0 AND `;
    }
    if(req.query.vendido == 'true'){
      query += `vendido = 1 AND `;
    }
    if(req.query.marca != null){
      query += `marca = '${req.query.marca}' AND `;
    }
    if(req.query.ano != null){
      query += `ano = ${req.query.ano} AND `;
    }
    if(req.query.created_at != null){
      query += `created_at LIKE '${req.query.created_at}%' AND `;
    }
    query = query.slice(0,-5);

    todosVeiculos = await connection.query(
      query,
      {
        type: QueryTypes.SELECT
      }
    );
    res.json(todosVeiculos);
    //  res.json(query);
  }

  async insert(req, res) {
    try {

      const veiculo = await Veiculos.create(req.body);

      return res.json(veiculo);
    }
    catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      const veiculo = await Veiculos.findByPk(id);
      if (!veiculo) {
        return res.status(400).json({
          errors: ['Veículo não existe.'],
        });
      }

      return res.json(veiculo);
    }
    catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      const veiculo = await Veiculos.findByPk(id);
      if (!veiculo) {
        return res.status(400).json({
          errors: ['Veículo não existe.'],
        });
      }

      await veiculo.destroy();
      return res.json({
        delete: true,
      });
    }
    catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      const veiculo = await Veiculos.findByPk(id);
      if (!veiculo) {
        return res.status(400).json({
          errors: ['Veículo não existe.'],
        });
      }

      const veiculoUpdate = await veiculo.update(req.body);

      return res.json(veiculoUpdate);
    }
    catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new VeiculosController();

