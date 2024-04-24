const express=require('express')
const app=express()

app.get('/home',(req,res)=>{
 const  {num1,num2}=req.body
 const result=num1+num2
    res.send(result)
})

const port=3000
app.listen(port)


















