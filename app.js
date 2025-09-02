import express from "express";
import dotenv from "dotenv";
import indexRouter from "./routes/indexRouter.js";

dotenv.config();

const app = express();

app.use("/",indexRouter);

const PORT = process.env.PORT;

app.listen(PORT,(err) => {
    if(err){
        console.log(err);
    }

    console.log(`server live at: http://localhost:${PORT}`);
})