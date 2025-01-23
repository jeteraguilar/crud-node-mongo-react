require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./src/infrastructure/db/mongo");
const productRoutes = require("./src/application/routes/productRoutes");

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Conectar ao banco de dados
connectDB();

// Rotas
app.use("/api/products", productRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

