// let express=require('express')
// let app=express()

//  app.use('/static',express.static('images'))

// app.get('/',function(req,res){
//     res.send("<img  src='/images/images.jpeg' />")
// })
// app.listen(3000)




// const http=require("http")
// const server=http.createServer()
// server.on("request",(req,res)=>{
//     res.end("server is created")
// })

// server.listen(8000)











const http=require("http")
const server=http.createServer()
server.on("request",(req,response)=>{
    response.end("nazeer nazeer")
})
server.listen(8000)













