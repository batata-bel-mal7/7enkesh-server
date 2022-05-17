import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import firebase from "./firebase";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.use((req: Request, res: Response, next) => {
  firebase.firestore().collection("products").get().then(snapshot => {
    snapshot.forEach(doc => {
      console.log(doc.id, "=>", doc.data());
    });
    next();
  }
  ).catch(err => {
    console.log("Error getting documents", err);
    next();
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
