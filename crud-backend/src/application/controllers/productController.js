const createProductUseCase = require('../../domain/use-cases/createProductUseCase');
const getAllProductsUseCase = require('../../domain/use-cases/getAllProductsUseCase');
const updateProductUseCase = require('../../domain/use-cases/updateProductUseCase');
const deleteProductUseCase = require('../../domain/use-cases/deleteProductUseCase');

const productController = {
  async create(req, res) {
    try {
      const product = await createProductUseCase(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const products = await getAllProductsUseCase();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const updatedProduct = await updateProductUseCase(id, req.body);
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedProduct = await deleteProductUseCase(id);
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = productController;
