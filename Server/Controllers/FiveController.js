class Duplicates
{
    duplicate(req, res)
    {
        const data = req.body
        const arr = data.arr
        const dupl= Array.from(new Set(arr))
        return res.json(dupl)
    }
}

module.exports=new Duplicates()