let express=require('express')
let router=express.Router()

router.get("/",function(req,res){
    res.send("<h2>this is a Customer page</h2>")
})
router.get("/login",function(req,res){
    res.send("<h2>this is a login page</h2>")
})
router.get("/registor",function(req,res){
    res.send("<h3>this is a registor page</h3>")
})
router.get("/contact",function(req,res){
    res.send("<h2>this is a contact page</h2>")
})
module.exports=router