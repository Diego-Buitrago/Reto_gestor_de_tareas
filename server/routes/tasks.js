const { Router} = require('express');
const router = Router();
const connection = require('../database/database')

const {ObjectId} = require('mongodb');

router.get('/', async(req,res)=>{
     
    const db = await connection();
    await db.collection('tareas').find()
    .toArray(function(err,tareas){
        res.json(tareas)
    })

});

module.exports = router;