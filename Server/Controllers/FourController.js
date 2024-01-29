class Reverse_Array
{
    reverse_array(req,res)
    {
        const data=req.body
        const arr = data.arr
        let reverse_array= []
        for(let i = arr.length-1; i>=0; i--)
        {
            reverse_array.push(arr[i])
        }
        return res.json(reverse_array)
    }
}

module.exports=new Reverse_Array()