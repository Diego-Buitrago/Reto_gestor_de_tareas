const jwt = require('jsonwebtoken');
const connection = require('../database/database')

const {ObjectId} = require('mongodb');


const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];

        if (!token) return res.status(403).json({message: "no token para continuar"})

        const decoded = jwt.verify(token, 'id_api')

        const db = await connection();
        const user = await db.collection('usuarios').find({"_id":ObjectId(decoded.id)})
   
        if (!user) return res.status(404).json({message: "usuario no encontrado"})

        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = verifyToken;