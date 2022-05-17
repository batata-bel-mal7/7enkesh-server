import express, { Express, Request, Response } from "express";
import CategoryRouter from "./src/routes/category";
import dotenv from "dotenv";

const app: Express = express();
const port = process.env.PORT || 8080;

app.use((req: Request, res: Response, next) => {
  console.log(req.url);
  next();
});

app.use(express.json());
app.use("/categories", CategoryRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
