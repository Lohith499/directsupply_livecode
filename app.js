const express= require("express");
const bodyParser= require("body-parser");
const routes=require("./routes/routes");
const app =express();

//to read the json request 
app.use(bodyParser.json())

let router=app.use("/users",routes);

app.listen(3000, (err)=>{
    if(err) throw err;
    console.log("Server Started");
})

router.get('/', function(req, res) {
    console.log("Default URL");
    res.json({ message: 'Welcome to Backend App' });
});
