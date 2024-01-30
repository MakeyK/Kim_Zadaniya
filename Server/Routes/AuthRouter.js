const Router = require('express')
const router = new Router()
const authController = require('../Controllers/AuthController')
const authMiddleware = require('../authMiddleware')
const checkRoleMiddleware = require('../CheckRoleMiddleware')

router.post('/registration', authController.registration)
router.post('/login', authController.login)
router.get('/', authMiddleware, authController.check)
router.get('/check', checkRoleMiddleware('User'), authController.check)

module.exports = router