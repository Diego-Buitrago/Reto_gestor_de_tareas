const { Router} = require('express');
const router = Router();
const connection = require('../database/database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const {ObjectId} = require('mongodb');

router.get('/login/:correo/:contrasena', async(req,res)=>{
     
    const db = await connection();
    const correo = req.params.correo;
    const contrasena = req.params.contrasena;

    await db.collection('usuarios').find(
        {"correo": correo},
    ).toArray(async function(err,usuario){

        if(!usuario) return res.status(400).json({message: "usuario no encontrado"});

        const matchPassword = await bcrypt.compare(contrasena, usuario[0].contrasena);

        if(!matchPassword) return res.status(400).json({token: null, message: "contraseña invalida"});

        const token = jwt.sign({id: usuario[0]._id}, 'id_api', {
            expiresIn: 86400 // 24 horas
        })

        return res.json(token);
    })
});

router.post('/nuevo_usuario', async (req,res)=>{
    const db = await connection();
    const { correo, contrasena} = req.body;

    const salt = await bcrypt.genSalt(10);
    const text = await bcrypt.hash(contrasena, salt)


    db.collection('usuarios').insertOne({
        correo,
        contrasena: text
    }, function(
        err,
        info
    ){
        const token = jwt.sign({id: info.ops[0]._id}, 'id_api', {
            expiresIn: 86400 // 24 horas
        })

        res.json(token);
    })
});

module.exports = router;