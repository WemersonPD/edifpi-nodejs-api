const ProductsRepository = require("../db/repositories/products.repository");

class ProductsService {
  productsRepository = new ProductsRepository();

  async list() {
    return await this.productsRepository.list();
  }

  async create(product) {
    return await this.productsRepository.create(product);
  }

  async updateById(productId, product) {
    const productExists = await this.productsRepository.getById(productId);

    if(!productExists) {
      throw new Error('Não existe um produto com este id!');
    }

    await this.productsRepository.update(productId, product);

    return await this.productsRepository.getById(productId);
  }

  async deleteById(productId) {
    const productExists = await this.productsRepository.getById(productId);

    if(!productExists) {
      throw new Error('Não existe um produto com este id!');
    }

    await this.productsRepository.deleteById(productId)

  }

}

module.exports = ProductsService;