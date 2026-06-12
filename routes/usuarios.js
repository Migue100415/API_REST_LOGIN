const express = require("express");
const router = express.Router();

const Usuario = require("../models/Usuario");


// ==================================================
// REGISTRO DE USUARIO
// ==================================================
router.post("/registro", async (req, res) => {

    try {

        const { usuario, password } = req.body;

        // Validar campos vacíos
        if (!usuario || !password) {
            return res.status(400).json({
                mensaje: "Debe ingresar usuario y contraseña"
            });
        }

        // Verificar si ya existe
        const existeUsuario = await Usuario.findOne({ usuario });

        if (existeUsuario) {
            return res.status(400).json({
                mensaje: "El usuario ya existe"
            });
        }

        // Crear usuario nuevo
        const nuevoUsuario = new Usuario({
            usuario,
            password
        });

        await nuevoUsuario.save();

        res.status(201).json({
            mensaje: "Usuario registrado correctamente"
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

});


// ==================================================
// LOGIN
// ==================================================
router.post("/login", async (req, res) => {

    try {

        const { usuario, password } = req.body;

        // Buscar usuario
        const usuarioEncontrado = await Usuario.findOne({
            usuario
        });

        if (!usuarioEncontrado) {
            return res.status(401).json({
                mensaje: "Error en la autenticación"
            });
        }

        // Comparar contraseña
        if (usuarioEncontrado.password !== password) {

            return res.status(401).json({
                mensaje: "Error en la autenticación"
            });

        }

        // Acceso correcto
        res.status(200).json({
            mensaje: "Autenticación satisfactoria"
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error del servidor"
        });

    }

});

module.exports = router;