const mongoose = require("mongoose")
const vadator = require("validator")
const bcrytpt = require("bcryptjs")

const usuarioSchema= new mongoose.Schema({
    nombre:{
        type:String,
        required: [true, "Por favor ingrese nombre"],
        maxlength: [120, "Nombre no puede exceder los 120 caracteres"]
    },
    email:{
        type: String,
        required:[true, "Por favor ingrese el correo electronico"],
        unique: true,
        validate: [validator.isEmail, "Por favor ingrese un email valido"]
    },
    password:{
        tipe: String,
        required: [true, "Por favor registre una contraseña"],
        minlenght:[6, "Tu contraseña no puede tener menos de 6 caracteres"],
        select: false
    },
    avatar:{
        public_id:{
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        }

    },
    role:{
        type: String,
        default: 'user'
    },
    fechaRegistro:{
        type:Date,
        default: Date.now
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date

})
module.exports = mongoose.Model("auth", usuarioSchema )