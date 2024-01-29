const {ToDo} = require('../models/models')

class DBController
{
    // Создание таблицы
    async create(req,res)
    {
        const{id, title, description, isDone} = req.body
        const type = await ToDo.create({id, title, description, isDone})
        return res.json(type)
    }
    // Вывод всей таблицы
    async getAll(req,res)
    {
        const todo = await ToDo.findAll()
        return res.json(todo)
    }
    // Вывод записей по true
    async getAllTrue(req,res)
    {
        const {isDone} = req.query
        let a = await ToDo.findAll({where:{isDone}})
        return res.json(a)
    }
    // Вывод записей по false
    async getAllFalse(req,res)
    {
        const {isDone} = req.query
        let b = await ToDo.findAll({where:{isDone}})
        return res.json(b)
    }
    // Вывод записей по определённому ID
    async getID(req,res)
    {
        const {id} = req.params
        let qwe = await ToDo.findAll({where:{id}})
        return res.json(qwe)
    }
    // Сортировка сначала true потом false 
    async getSortTrue(req,res)
    {
        const {isDone}=req.query
        const sortt = await ToDo.findAll({
            order:
            [
                ["isDone", "DESC"],
            ]})
            return res.json(sortt)
    }
    // Сортировка сначала false потом true 
    async getSortFalse(req,res)
    {
        const {isDone} = req.query
        const sortf = await ToDo.findAll({
            order:
            [
                ["isDone", "ASC"],
            ]})
            return res.json(sortf)
    }
    // Сортировка по дате (Сначала новые, потом старые записи)
    async getDateNew(req,res)
    {
        const {isDone} = req.query
        const newl = await ToDo.findAll({
            order:
            [
                ["createdAt", "DESC"]
            ]
        })
        return res.json(newl)
    }
    // Сортировка по дате (Сначала старые, потом новые записи)
    async getDateOld(req,res)
    {
        const {isDone} = req.query
        const old = await ToDo.findAll({
            order:
            [
                ["createdAt", "ASC"]
            ]
        })
        return res.json(old)
    }
    // Удаление по выбранному ID
    async DelId(req,res)
    {
        const {id} = req.params
        let delid = await ToDo.destroy({where:{id}})
        return res.json(delid)
    }
    // Удаление всех записей в таблице
    async DelFull(req,res)
    {
        const y = await ToDo.destroy()
        return res.json(y)
    }
    // Редактирование записей по выбранному ID
    async RedId(req,res)
    {
        const {id} = req.body
        const red = await ToDo.update({title : req.body.title},{where:{id}})
        return res.json(red)
    }
    async getSortTrueUp(req,res)
    {
        const {isDone} = req.query
        const test = await ToDo.findAll({
            order:
            [
                ["updatedAt","ASC"]
            ]
        })
        return res.json(test)
    }
}

module.exports = new DBController()