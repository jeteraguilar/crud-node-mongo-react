const ProductRepository = require('../../infrastructure/repositories/ProductRepository');

const getAllProductsUseCase = async () => {
  return await ProductRepository.findAll();
};

module.exports = getAllProductsUseCase;
