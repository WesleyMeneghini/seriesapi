const router = require('express').Router()

const authController = require('../controllers/autenticacao')
const UsuarioValidator = require('../validator/UsuarioValidator')

router.post('/registrar',UsuarioValidator.validacoes(), authController.registra)
router.post('/autenticar', authController.autentica)

module.exports = router