const ProductRepository = require('../../infrastructure/repositories/ProductRepository');

const createProductUseCase = async (productData) => {
  return await ProductRepository.create(productData);
};

module.exports = createProductUseCase;
