import { Router } from "express";
import { messages } from "../message.js";
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.status(200).send("This will be homepage");
});

indexRouter.get("/new{s}", (req, res) => {
  res.status(200).send("This is from where you will be sending message");
});

indexRouter.get("/{*splat}", (req, res, next) => {
  throw new Error("Wront url");
});

export default indexRouter;
