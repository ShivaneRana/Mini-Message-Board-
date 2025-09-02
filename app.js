import express from "express";
import dotenv from "dotenv";
import indexRouter from "./routes/indexRouter.js";
import path from "node:path";
import { fileURLToPath } from "node:url";

dotenv.config();
const app = express();
const _fileName = fileURLToPath(import.meta.url);
const _dirName = path.dirname(_fileName);
const assetsPath = path.join(_dirName, "public");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));
app.set("views", path.join(_dirName, "views"));
app.set("view engine", "ejs");
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  console.log(err);

  res.status(err.status || 400).send("Bad Request");
});

const PORT = process.env.PORT;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`server live at: http://localhost:${PORT}`);
});
