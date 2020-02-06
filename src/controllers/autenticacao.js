const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const usuarioDao = new (require('../models/Usuarios'))()
const authConfig = require('../config/auth')

gerarToken = (params) => {
    return jwt.sign(params, authConfig.secret, { expiresIn: 60 })
}

module.exports = {

    async registra(req, res){
        const erros = validationResult(req)
        console.log(erros.isEmpty())

        if(!erros.isEmpty()){
            return res.status(400).send(erros)
        }else{

            let usuario = req.body

            try {
                usuario.senha = await bcrypt.hash(usuario.senha, 10)
                console.log("senha: " + usuario.senha)
                const resultado = await usuarioDao.insere(usuario)

                usuario = {id: resultado.insertId, ...usuario}

                res.status(201).send({
                    usuario, 
                    token: gerarToken({id: usuario.id})
                })

            } catch (error) {
                return res.status(500).send(erro)
            }
        }
    },

    async autentica(req, res){
        const { email, senha } = req.body

        try {
            let usuario = await usuarioDao.buscarPorEmail(email)
            usuario = usuario[0]

            if(!usuario)
                return res.status(400).send({erro: "Usuário não cadastrado"})

            if(!await bcrypt.compare(senha, usuario.senha)) 
                return res.status(400).send({erro: "Senha invalida"})

            const token = "akdljkljdad6a65d65a45d45asdslkdksdjkjsd$%wejwk";
            console.log({token: token})

            res.send({
                usuario, 
                token: gerarToken({id: usuario.id})
            })

            
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    }
}