const express = require("express");
const productRoutes = require("./productRoutes");

const router = express.Router();

// Rota base para produtos
router.use("/products", productRoutes);

module.exports = router;
