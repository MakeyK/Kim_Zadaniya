const Router = require('express')
const router = new Router()
const OneController = require('../Controllers/OneController')
const TwoController = require('../Controllers/TwoController')
const FreeController = require('../Controllers/FreeController')
const FourController = require('../Controllers/FourController')
const FiveController = require('../Controllers/FiveController')

const z3Controller = require('../Controllers/z3Controller')
const DBController = require('../Controllers/DBController')
const db = require('../db')

// Создание таблицы и добавление записей
router.post('/todos', DBController.create)
router.post('/create',z3Controller.ccreate)

// Выборка всех записей из таблицы
router.get('/getall', DBController.getAll)
router.get('/getal', z3Controller.getAll)
// Фильтры
router.get('/alltrue', DBController.getAllTrue)
router.get('/allfalse', DBController.getAllFalse)

// Выборка по ID
router.get('/get/:id', DBController.getID)

// Удаление
router.delete('/del/:id', DBController.DelId)
router.delete('/delf', DBController.DelFull)
router.delete('/dell/:id', z3Controller.DelID)

// Редактирование
router.patch('/red/:id', DBController.RedId)

// Сортировка 
router.get('/sortt', DBController.getSortTrue)
router.get('/sortf', DBController.getSortFalse)
router.get('/sort-d-n', DBController.getDateNew)
router.get('/sort-d-o', DBController.getDateOld)
router.get('/sort-up-t', DBController.getSortTrueUp)

// Занятие 1 
router.get('/sum', OneController.summa)
router.get('/reverse', TwoController.reverse)
router.post('/obj', FreeController.obj_to_array)
router.post('/rev-arr', FourController.reverse_array)
router.post('/dubl', FiveController.duplicate)


module.exports = router