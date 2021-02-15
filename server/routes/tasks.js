const { Router} = require('express');
const router = Router();
const connection = require('../database/database')

const {ObjectId} = require('mongodb');

router.get('/tareas/:id_usuario', async(req,res)=>{
     
    const db = await connection();
    const id_usuario = req.params.id_usuario;
    await db.collection('tareas').find({id_usuario: id_usuario})
    .toArray(function(err,tareas){
        return res.json(tareas)
    })

});

router.post('/nueva_tarea', async (req,res)=>{
    const db = await connection();
    const {id_usuario, nombre, prioridad, vencimiento} = req.body;

    db.collection('tareas').insertOne({
        id_usuario,
        nombre,
        prioridad,
        vencimiento
    }, function(
        err,
        info
    ){
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