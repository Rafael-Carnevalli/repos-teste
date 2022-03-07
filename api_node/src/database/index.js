import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Veiculos from '../models/Veiculos';

const models = [Veiculos];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
