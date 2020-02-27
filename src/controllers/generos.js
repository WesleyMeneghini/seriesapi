const generoDAO = new  (require('../models/Generos'))()

module.exports = {

    async lista ( req, res ) {
        try{
            const retorno = await generoDAO.findAll();

            if(retorno){
                return res.status(200).send(retorno)
            }

        }catch(error){
            console.log(error)
            res.status(500).send({erro: error})
        }
    }

}