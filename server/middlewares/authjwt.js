const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    const token = req.headers["x-access-token"];

    console.log(token)

    if (!token) return res.status(403).json({message: "no token para continuar"})

    const decoded = jwt.verify(token, 'id_api')

    console.log(decoded)

    next()
}

module.exports = verifyToken;