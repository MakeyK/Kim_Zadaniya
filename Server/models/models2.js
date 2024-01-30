const sequelize = require('../db')
const {DataTypes, Sequelize}= require('sequelize')

const Users = sequelize.define('users',
{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login:{type: DataTypes.STRING, unique: true},
    hashpassword:{type: DataTypes.STRING},
    role:{type: DataTypes.STRING, defaultValue: "User"}
})

module.exports = {Users}