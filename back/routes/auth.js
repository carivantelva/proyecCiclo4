const express=require("express");
const { registroUsuario } = require("../controllers/authControllers");
const { route } = require("./products");
const router=express.Router();

router.route('usuario/registro').post(registroUsuario)

module.exports= route