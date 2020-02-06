const express = require('express');
const app = express();
const consign = require('consign');
const bodyParse = require('body-parser');

const customExpress = () =>{

    app.use(bodyParse.urlencoded());
    app.use(bodyParse.json());

    app.use((req, res, next) => {
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
            return next()
        })

    })

    // injeção de dependencias no app
    consign()
        .include('controllers')
        .include('models')
        .into(app);
    
    return app
}

module.exports = customExpress();
