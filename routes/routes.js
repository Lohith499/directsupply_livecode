const express=require("express");
const router=express.Router();
const fetch=require("node-fetch");


router.use((req,res,next)=>{
    console.log("Middleware");
    next();
});

router.get('/', function(req, res) {
    console.log("Default URL");
    let output=[];
    fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then(res=>res.json())
    .then(res=>{
        res.data.map(item=>{
                output.push(item);
        })
        return res;
    })
    .then(()=>{
        return res.status(200).json({result : output});
    })
    .catch(err=>{
        return res.status(500).json({error : "Internal Server Error"});
    })
});


router.post('/details/:id', function(req, res,next) {
    console.log("Default URL");
    console.log(req.params.id);
    console.log(req.query.name);
    console.log(req.body.age);
    res.json({ message: 'Welcome to Post request Details' });
});


module.exports =router;