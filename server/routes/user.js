const { Router} = require('express');
const router = Router();
const connection = require('../database/database')
const jwt = require('jsonwebtoken');

const {ObjectId} = require('mongodb');

router.get('/login/:correo/:contrasena', async(req,res)=>{
     
    const db = await connection();
    const correo = req.params.correo;
    const contrasena = req.params.contrasena;

    const token = jwt.sign(contrasena, 'token_contrasena');

    await db.collection('usuarios').find(
        { $and: [{"correo": correo}, {"contrasena": token}]},
    ).toArray(function(err,usuario){
        return res.json(usuario)
    })
});

router.post('/nuevo_usuario', async (req,res)=>{
    const db = await connection();
    const { correo, contrasena} = req.body;

    const token = jwt.sign(contrasena, 'token_contrasena');

    db.collection('usuarios').insertOne({
        correo,
        contrasena: token
    }, function(
        err,
        info
    ){
        res.json(info.ops[0]);
    })
});

module.exports = router;