import Sequelize, { Model } from 'sequelize';

export default class Veiculos extends Model {
  static init(sequelize) {
    super.init({
      veiculo: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome do veiculo precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      marca: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Marca do veiculo precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      ano: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Ano precisa ser um número inteiro.',
          },
        },
      },
      descricao: {
        type: Sequelize.TEXT,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 255],
            msg: 'A descrição do veiculo precisa ter entre 1 e 255 caracteres.',
          },
        },
      },
      vendido: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    }, {
      sequelize,
    });
    return this;
  }
}
