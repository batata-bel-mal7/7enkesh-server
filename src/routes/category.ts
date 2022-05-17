import { Router } from "express";
import type { Request, Response } from "express";
import admin from "../../firebase";
import { body, validationResult } from "express-validator";
import Responder from "../services/Responder";
const CategoryRouter = Router();

CategoryRouter.post(
  "/",
  [body("name").not().isEmpty().withMessage("Name is required")],
  (req: Request, res: Response) => {
    if(!validationResult(req).isEmpty()) {
      return Responder.badRequest(res, validationResult(req).array());
    }
    admin
      .firestore()
      .collection("categories")
      .add({
        name: req.body.name,
        createdAt: new Date(),
      })
      .then((docRef) => {
        return Responder.itemCreated(res, docRef.id);
      });
  }
);

export default CategoryRouter;
