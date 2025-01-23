const express = require("express");
const ProductUseCase = require("../../domain/usecases/ProductUseCase");

const router = express.Router();

// Criar um produto
router.post("/", async (req, res) => {
    try {
        const product = await ProductUseCase.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Listar todos os produtos
router.get("/", async (req, res) => {
    try {
        const products = await ProductUseCase.getAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Buscar produto por ID
router.get("/:id", async (req, res) => {
    try {
        const product = await ProductUseCase.getById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Atualizar produto por ID
router.put("/:id", async (req, res) => {
    try {
        const updatedProduct = await ProductUseCase.update(req.params.id, req.body);
        if (!updatedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Excluir produto por ID
router.delete("/:id", async (req, res) => {
    try {
        const deleted = await ProductUseCase.delete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
