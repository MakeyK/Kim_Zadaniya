const express = require("express")
require ('dotenv').config()
const sequelize = require('./db')
const models = require('./models/models')
const CryptoJS = require('crypto-js')
const cors = require('cors')
const PORT = process.env.PORT || 5000
const router = require('./Routes/index') 

const app = express()
app.use(express.json())
app.use('/mak', router)

const start = async() =>
{
    try
    {
       
        console.log("All models were synchronized successfuly.")
        await sequelize.authenticate()
        await sequelize.sync();
        console.log('Connection has been established successfuly.')
        app.listen(PORT, () => console.log(`Сервер запущен. Порт:${PORT} `))
    }
    catch(e)
    {
        console.error('Unable to connect to the database.', error)
        console.log(e)
    }
}
start()