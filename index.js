let express = require("express");
let app = new express();


let data =(req,res,next)=>{
    if(req.query.name == "vivek"){
        res.send("Welcome Vivek")
    }else{
        next();
    }
}
let route = express.Router();
route.use(data);

// app.use(data);
app.get("",(req,res)=>{
    res.send("hi there")
})
route.get("/a",(req,res)=>{
    res.send("hi there")
})
route.get("/b",(req,res)=>{
    res.send("hi there")
})

app.use("/",route);
app.listen(5900);