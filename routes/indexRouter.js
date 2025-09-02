import { Router } from "express";
import { getAllMessage } from "../message.js";
const indexRouter = Router();


indexRouter.get("/",async (req,res) => {
    try{
        const messages = getAllMessage();
        res.render("index", { messages: messages });

    }catch(err){
        console.error(error)
    }
})

indexRouter.get("/new{s}",(req,res) => {

    try{
        res.render("form");
    }catch(err){
        console.error(error);
    }

})

indexRouter.post("/new",(req,res) => {

})

indexRouter.get("/{*splat}",(req,res,next) => {
    throw new Error("Wront url");
})

export default indexRouter;