const { Router} = require('express');
const router = Router();
const connection = require('../database/database')
require('dotenv').config();
const multer = require('multer');
const upload = multer({dest: '../public/uploads'})
const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
const fs = require('fs-extra');

const {ObjectId} = require('mongodb');

router.get('/tareas/:id_usuario', async(req,res)=>{
     
    const db = await connection();
    const id_usuario = req.params.id_usuario;

    await db.collection('tareas').find({id_usuario: id_usuario})
    .toArray(function(err,tareas){
        return res.json(tareas)
    })

});

router.get('/editar_tarea/:id_tarea', async(req,res)=>{
     
    const db = await connection();
    const id_tarea = req.params.id_tarea;

    await db.collection('tareas').find({"_id":ObjectId(id_tarea)})
    .toArray(function(err,tareas){
        return res.json(tareas)
    })

});

router.post('/nueva_tarea/:id_usuario/:nombre/:prioridad/:vencimiento', upload.single('imagen'), async(req,res) => {
    const result = await cloudinary.v2.uploader.upload(req.file.path);
    
    const db = await connection();
    const id_usuario = req.params.id_usuario;
    const nombre = req.params.nombre;
    const prioridad = req.params.prioridad;
    const vencimiento = req.params.vencimiento;
     
    db.collection('tareas').insertOne({
        id_usuario,
        nombre,
        prioridad,
        vencimiento,
        imagenURL: result.url
    }, async function(
        err,
        info
    ){
        await fs.unlink(req.file.path);
        res.json(info.ops[0]);
    })

});


router.put('/actualizar_tarea/:id', async (req,res)=>{
    const db = await connection();
    const { id_usuario, nombre, prioridad, vencimiento} = req.body;
    const id = req.params.id;

    db.collection('tareas').findOneAndUpdate(
        {"_id":ObjectId(id)},
        {$set:{id_usuario:id_usuario, nombre:nombre, prioridad:prioridad, vencimiento:vencimiento}},
        function(){
           res.json('Tarea actualizada');
        }
    )
});

router.delete('/eliminar_tarea', async (req,res)=>{

    const db = await connection();
    const { id } = req.body

    db.collection('tareas').deleteOne(
        {"_id":ObjectId(id)},
        function(){
            res.json({message:'Tarea eliminada'});
        }
    )
})


module.exports = router;