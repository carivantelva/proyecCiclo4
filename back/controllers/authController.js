const User = require("../models/auth")
const ErrorHandler= require("../utils/erroHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors")

//Registro un nuevo Usuario   /api/usuario/registro

exports.registroUsuario=catchAsyncErrors(async(req, res, next)=>{
    const{nombre, email, password}= req.body;

    const user = await User.create({
        nombre, 
        email,
        password,
        avatar:{
            public_id:"clipart-computer-icons-avatar-user-profile-avatar-heroes-rectangle",
            url:"https://e7.pngegg.com/pngimages/223/244/png-clipart-computer-icons-avatar-user-profile-avatar-heroes-rectangle.png"
        }      
    })

    res.status(201).json({
        success:true,
        user
    })

})