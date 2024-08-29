import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser())

app.use(morgan('dev'))

app.use("/hello", (req, res) => {
  res.status(201).send("hello world");
});

app.all("*", (req, res) => {
  res.status(401).send("Page Not Found");
});

export default app;
