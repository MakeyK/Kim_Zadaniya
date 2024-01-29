class Obj_To_Array
{
    obj_to_array(req,res)
    {
        let obj=req.body
        const key=Object.keys(obj)
        const value=Object.values(obj)
        let arr = []
        for(let i = 0; i < key.length; i++)
        {
            arr.push({"key": key[i], "value":value[i]})
        }
        return res.json(arr)
    }
}

module.exports=new Obj_To_Array()