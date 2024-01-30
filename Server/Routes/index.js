const Router = require('express')
const router = new Router()
const Routers = require('./Routers')
const AuthRouter = require('./AuthRouter')

router.use('/rout', Routers)
router.use('/auth', AuthRouter)

module.exports = router