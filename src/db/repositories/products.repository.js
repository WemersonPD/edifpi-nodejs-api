const { product } = require('../models');

class ProductsRepository {
  async list() {
    return await product.findAll({
      attributes: {
        exclude: ['deletedAt']
      }
    });
  }

  async create(currentProduct) {
    return await product.create(currentProduct);
  }

  async update(productId, currentProduct) {
    return await product
      .update(currentProduct, {
        where: {
          id: productId
        }
      });
  }

  async getById(productId) {
    return await product.findByPk(productId, {
      attributes: {
        exclude: ['deletedAt']
      }
    });
  }

  async deleteById(productId) {
    return await product.destroy({
      where: {
        id: productId
      }
    })
  }
}


module.exports = ProductsRepository;