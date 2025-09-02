import { Router } from "express";
import { getAllMessage,addNewMessage } from "../message.js";
const indexRouter = Router();


indexRouter.get("/",(req,res) => {
    try{
        const messages = getAllMessage();
        res.status(200).render("index", { messages: messages });
    }catch(err){
        console.error(err)
    }
})

indexRouter.get("/new{s}",(req,res) => {
    try{
        res.status(200).render("form");
    }catch(err){
        console.error(err);
    }
})

indexRouter.post("/new",(req,res) => {
    try{
        const {username,message} = req.body;
        const newDate = new Date();
        addNewMessage(username,message,newDate);
        res.redirect("/");
    }catch(err){
        console.error(err);
    }
})

export default indexRouter;