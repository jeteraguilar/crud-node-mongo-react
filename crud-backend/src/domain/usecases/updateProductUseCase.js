const ProductRepository = require('../../infrastructure/repositories/ProductRepository');

const updateProductUseCase = async (id, updateData) => {
  return await ProductRepository.update(id, updateData);
};

module.exports = updateProductUseCase;
