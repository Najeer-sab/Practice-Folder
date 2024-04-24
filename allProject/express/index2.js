let express=require('express')
let app=express()

let customer = require('./customer.js')
// let customer = require('./customer1.js')
// let customer = require('./customer2.js')


// when we have multiple modules we have use middleware




app.get( "/",function(req,res){
    res.send("Heloo welocome to india")
}
)

app. get ('/about', function(req,res){
    res.send("hello nazeer how are you")

})
app.use( '/customer',customer)     //middleware
 
app.listen(3000)