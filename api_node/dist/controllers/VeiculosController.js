"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Veiculos = require('../models/Veiculos'); var _Veiculos2 = _interopRequireDefault(_Veiculos);
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
const { QueryTypes } = require('@sequelize/core');

const connection = new (0, _sequelize2.default)(_database2.default);


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

      const veiculo = await _Veiculos2.default.create(req.body);

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
      const veiculo = await _Veiculos2.default.findByPk(id);
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
      const veiculo = await _Veiculos2.default.findByPk(id);
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
      const veiculo = await _Veiculos2.default.findByPk(id);
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

exports. default = new VeiculosController();

