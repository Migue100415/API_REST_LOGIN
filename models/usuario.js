const mongoose = require("mongoose");

// Esquema de usuario
const UsuarioSchema = new mongoose.Schema({

    usuario: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }

});

// Exportar modelo
module.exports = mongoose.model("Usuario", UsuarioSchema);