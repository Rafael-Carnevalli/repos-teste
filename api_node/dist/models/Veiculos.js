"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Veiculos extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      veiculo: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome do veiculo precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      marca: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Marca do veiculo precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      ano: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Ano precisa ser um número inteiro.',
          },
        },
      },
      descricao: {
        type: _sequelize2.default.TEXT,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 255],
            msg: 'A descrição do veiculo precisa ter entre 1 e 255 caracteres.',
          },
        },
      },
      vendido: {
        type: _sequelize2.default.BOOLEAN,
        defaultValue: false,
      },
    }, {
      sequelize,
    });
    return this;
  }
} exports.default = Veiculos;
