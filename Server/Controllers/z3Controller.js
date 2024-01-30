const {Users} = require('../models/models2')

class z3Controller
{
    // Создание таблицы
    async ccreate(req,res)
    {
        const{id, login, hashpassword, role} = req.body
        const t = await Users.create({id, login, hashpassword, role})
        return res.json(t)
    }
    // Вывод всей таблицы
    async getAll(req,res)
    {
        const todo = await Users.findAll()
        return res.json(todo)
    }
    async DelID(req,res)
    {
        const {id} = req.params
        let delid = await Users.destroy({where:{id}})
        return res.json(delid)
    }
}

module.exports = new z3Controller()