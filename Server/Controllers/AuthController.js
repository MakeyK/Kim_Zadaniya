const ApiError = require('../ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Users} = require('../models/models2')

const generateJwt = (id, login, role) => 
{
    return jwt.sign
    (
        {id, login, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class AuthController 
{
    async registration(req, res, next)
    {
        const {login, hashpassword, role} = req.body
        if (!login || !hashpassword)
        {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await Users.findOne({where: {login}})
        if (candidate)
        {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(hashpassword, 5)
        const user = await Users.create({login, hashpassword : hashPassword, role})
        const token = generateJwt(user.id, user.login, user.role)
        return res.json({token})
    }

    async login(req, res, next)
    {
        const {login, hashpassword} = req.body
        const user = await Users.findOne({where: {login}})
        if (!user)
        {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(hashpassword, user.hashpassword)
        if (!comparePassword)
        {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.login, user.role)
        return res.json({token})
    }

    async check(req, res, next)
    {
        res.json('Доступ есть')
    }
}

module.exports = new AuthController()