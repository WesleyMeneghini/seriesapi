const router = require('express').Router()
const generoController = require('../controllers/generos')

router.get('/', generoController.lista)

module.exports = router