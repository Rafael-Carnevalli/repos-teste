import dotenv from 'dotenv';

dotenv.config();

import './database';

import express from "express";
import homeRoutes from './routes/homeRoutes';
import veiculosRoutes from './routes/veiculosRoutes';

class App {
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes(){
    this.app.use('/', homeRoutes);
    this.app.use('/veiculos/', veiculosRoutes);
  }
}

export default new App().app;
