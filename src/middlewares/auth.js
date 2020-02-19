const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');


module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({ erro: 'Token não encontrado'});
    }

    const parts = authHeader.split(' ');
    
    if(!parts.length === 2){
        return res.status(401).send({ erro: 'Token não encontrado'});
    }

    const [ bearer, token ] = parts;

    jwt.verify(token, authConfig.secret, (error, user) => {
        if(error) return res.status(401).send({ error: 'Token invalido'})

        req.userId = user.id;
        return next();
    })
}
