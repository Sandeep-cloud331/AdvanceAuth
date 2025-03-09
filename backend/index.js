import express from "express";

const app = express();

app.get("/home",(req,res)=>{
  res.send("hello thre");
})

app.listen(3000,()=>{
  console.log("running fine on 3000");
  
})