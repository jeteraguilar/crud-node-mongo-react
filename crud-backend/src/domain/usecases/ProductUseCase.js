const ProductRepository = require("../../infrastructure/repositories/ProductRepository");

const ProductUseCase = {
    async create(productData) {
        if (!productData.name || !productData.price) {
            throw new Error("Name and price are required");
        }
        return await ProductRepository.create(productData);
    },
    async getAll() {
        return await ProductRepository.findAll();
    },
    async getById(id) {
        return await ProductRepository.findById(id);
    },
    async update(id, productData) {
        if (!id) {
            throw new Error("ID is required");
        }
        return await ProductRepository.update(id, productData);
    },
    async delete(id) {
        if (!id) {
            throw new Error("ID is required");
        }
        return await ProductRepository.delete(id);
    },
};

module.exports = ProductUseCase;
