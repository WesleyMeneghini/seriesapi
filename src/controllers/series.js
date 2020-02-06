const seriesDao = new (require('../models/Series'))()

// const jwt = require('jsonwebtoken');
// const authConfig = require('../../config/auth')


module.exports = {


    async listar(req, res){

        try {
            const lista = await seriesDao.lista()
            
            if (lista) {
                return res.send(lista)
            } else {
                return res.status(404).send('Lista vazia')
            }
        } catch (error) {
            return res.status(500).send(erro)
        }
    },

    async insere(req, res){

        let serie = req.body;

        try {
            const resultado = await seriesDao.insere(serie)
            const insertedId = resultado.insertId
            serie = { id:insertedId, ...serie }
            
            return res.status(201).send(serie)
        } catch (error) {
            return res.status(500).send(erro)
        }
    },

    async buscaPorId(req, res){

        const { id } = req.params

        try {
            let serie = await seriesDao.buscaPorId(id)
            serie = serie[0]

            if (!serie) {
                return res.status(404).send({erro: 'erro ao buscar'})
            } else {
                return res.send(serie)
            }
        } catch (error) {
            return res.status(500).send(erro)
        }
    },

    async atualiza(req, res){
        const { id } = req.params
        const serie = req.body
        serie.id = id

        const retorno = await seriesDao.atualiza(serie)
        try {
            if (!retorno.affectedRows) {
                return res.status(404).send({erro: 'Serie nao encontrada'})
            } else {
                return res.send(serie)
            }
        } catch (error) {
            console.log('Erro ao deletar a série: ' + erro)
            return res.status(500).send({erro: 'erro ao atualizar serie'})
        } 
    },

    async delete(req, res){

        const { id } = req.params

        const retorno = await seriesDao.delete(id)

        try {
            if(!retorno.affectedRows){
                return res.status(404).send({erro: 'Serie nao encontrada'})
            }else{
                return res.status(204).send()
            }
        } catch (error) {
            console.log('Erro ao deletar a série: ' + error)
            return res.status(500).send({erro: 'erro ao deletar serie'})
        }

    },
}