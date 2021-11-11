const { Router } = require('express');

const ProductsService = require('../services/products.service');

const routes = Router();
const productsService = new ProductsService();

routes.get('/', async (_request, response) => {
  const products = await productsService.list();

  return response
    .status(200)
    .json(products);
});

routes.post('/', async (request, response) => {
  const { body } = request;
  const product = await productsService.create(body);

  return response.status(201).json(product);
});

routes.put('/:id', async (request, response) => {
  const { body, params } = request;
  const { id } = params;
  
  try {
    await productsService.updateById(id, body);

  } catch(error) {
    return response.status(400).json({
      errorMessage: error.message
    })
  }

  return response.status(200).json({
    ok: true
  })

})

routes.delete('/:id', async (request, response) => {
  const { params } = request;
  const { id } = params;
  
  try {
    await productsService.deleteById(id);

  } catch(error) {
    return response.status(400).json({
      errorMessage: error.message
    })
  }

  return response.status(200).json({
    ok: true
  })

})


module.exports = routes;

