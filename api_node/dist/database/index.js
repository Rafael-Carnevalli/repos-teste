"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Veiculos = require('../models/Veiculos'); var _Veiculos2 = _interopRequireDefault(_Veiculos);

const models = [_Veiculos2.default];

const connection = new (0, _sequelize2.default)(_database2.default);

models.forEach((model) => model.init(connection));
