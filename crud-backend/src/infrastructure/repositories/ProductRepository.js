const ProductModel = require("../db/ProductModel");

const ProductRepository = {
    async create(product) {
        return await ProductModel.create(product);
    },
    async findAll() {
        return await ProductModel.find();
    },
    async findById(id) {
        return await ProductModel.findById(id);
    },
    async update(id, product) {
        return await ProductModel.findByIdAndUpdate(id, product, { new: true });
    },
    async delete(id) {
        return await ProductModel.findByIdAndDelete(id);
    },
};

module.exports = ProductRepository;
