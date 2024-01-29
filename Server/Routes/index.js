const Router = require('express')
const router = new Router()
const Routers = require('./Routers')

router.use('/rout', Routers)

module.exports = router