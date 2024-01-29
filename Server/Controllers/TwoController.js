class ReverseCaseController
{
    reverse(req,res)
    {
        const data = req.body
        let text1 = ""
        for(let i=0; i<data.text.length; i++)
        {
            if(data.text[i]==data.text[i].toUpperCase()) text1+=data.text[i].toLowerCase()
            else text1+=data.text[i].toUpperCase()
        }
        return res.json(text1)
    }
}

module.exports = new ReverseCaseController()