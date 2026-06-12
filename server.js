// Importar librerías
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Configurar variables de entorno
dotenv.config();

// Crear aplicación
const app = express();

// Conectar a MongoDB
const conectarDB = require("./config/db");
conectarDB();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/usuarios", require("./routes/usuarios"));

// Puerto
const PORT = process.env.PORT || 3000;

// Levantar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});