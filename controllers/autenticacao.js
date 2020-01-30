const { validationResult } = require('express-validator');
const UsuarioValidator = require('../validator/UsuarioValidator'); 
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth');

gerarToken = (params) => {
    console.log(params)
    return jwt.sign(params, authConfig.secret, { expiresIn: 60 })
}

autenticacao = (app) => {

    app.post('/registrar', 
    [
        UsuarioValidator.validacoes()
    ], 
    (req, res) => {

        const erros = validationResult(req);
        console.log(erros.isEmpty());

        if(!erros.isEmpty()){
            res.status(400).send(erros)
            return
        }else{
            const usuario = req.body;

            usuarioDao = app.models.Usuarios;
    
            usuarioDao.insere(usuario)
                .then(usuario => {
                    const token = gerarToken({id: usuario.id});
                    res.status(201).send({usuario, token})
                })
                .catch(erro => res.status(500).send(erro))
        }
    })

    app.post('/autenticar', async (req, res) => {
        console.log('')
        const { email, senha } = req.body;
        console.log(email)

        try {
            usuarioDao = app.models.Usuarios;
            const usuario = await usuarioDao.buscarPorEmail(email);

            if(!usuario)
                return res.status(400).send({erro: "Usuário não cadastrado"})

            if(usuario.senha !== senha) 
                return res.status(400).send({erro: "Senha invalida"})

            const token = gerarToken({id: usuario.id});

            res.send({usuario, token})

            
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    })
}

module.exports = autenticacao;