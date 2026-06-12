// Importa mongoose
const mongoose = require("mongoose");

// Función para conectar a MongoDB Atlas
const conectarDB = async () => {
    try {

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Base de datos conectada correctamente");

    } catch (error) {

        console.log("Error al conectar la base de datos");
        console.log(error);

        process.exit(1);
    }
};

module.exports = conectarDB;