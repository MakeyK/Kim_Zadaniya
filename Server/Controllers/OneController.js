class SumController
{
    summa(req, res)
    {
        const {x, y} = req.body
        if(x==+x && y==+y)
        {
            const sum = +x +(+y)
            return res.json(sum)
        } 
        else return res.json({message: "Это не число!"})
    }
}

module.exports = new SumController()