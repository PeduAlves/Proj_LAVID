import express, { Request, Response } from "express";

const app = express();

app.get("/test", (request:Request,response:Response)=>{
    return response.send("Hello world");
})
app.post("/test", (request:Request,response:Response)=>{
    return response.send("Ola mundo");
})

app.listen(3000,()=> console.log("Server is Running"));
