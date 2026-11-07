// index.js

import express from 'express';
import cors from 'cors';
import "dotenv/config";

const port = process.env.PORT || 5000; 

const app = express();

app.use(express.json());

app.use(cors({
    origin:"*"
}));

app.get("/",(req,res)=>{
    try{
        return res.status(200).json({success:true,message:"API working"});
    }catch(err){
        return res.status(500).json({success:false,message:"something went wrong"});
    }
});

app.get("/test",(req,res)=>{
    try{
        return res.status(200).json({success:true,message:"API working",data:{name:"Amarjit"}});
    }catch(err){
        return res.status(500).json({success:false,message:"something went wrong"});
    }
});


app.get("/v1",(req,res)=>{
    try{
        return res.status(200).json({success:true,message:"API working",data:{email:"Amarjit@gmail.com"}});
    }catch(err){
        return res.status(500).json({success:false,message:"something went wrong"});
    }
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
