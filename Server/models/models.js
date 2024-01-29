const sequelize = require('../db')
const {DataTypes, Sequelize}= require('sequelize')

const ToDo = sequelize.define('todo',
{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING, unique: true},
    description:{type: DataTypes.STRING},
    isDone:{type: DataTypes.BOOLEAN}
})

module.exports = {ToDo}