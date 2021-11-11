const { Router } = require('express');
const app = require('../server');

const productsController = require('./products.controller');

const routes = Router();

routes.use('/produtos', productsController);

module.exports = routes;