import { Router } from "express";
import admin from "../firebase";
const CategoryRouter = Router();

CategoryRouter.post("/", (req, res) => {
  admin
    .firestore()
    .collection("categories")
    .add({
      name: req.body.name,
      createdAt: new Date(),
    })
    .then((docRef) => {
      res.send(docRef.id);
    });
});

export default CategoryRouter;
