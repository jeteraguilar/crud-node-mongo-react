const ProductRepository = require('../../infrastructure/repositories/ProductRepository');

const deleteProductUseCase = async (id) => {
  return await ProductRepository.delete(id);
};

module.exports = deleteProductUseCase;
