import type { Request, Response } from "express";
import { ValidationError } from "express-validator";
const ResponderService = {
  itemCreated(res: Response, itemId: string) {
    return res.send({
      status: "success",
      data: {
        id: itemId,
      },
    });
  },
  badRequest(res: Response, errors: ValidationError[]) {
    return res.status(400).send({
      status: "error",
      errors,
    });
  },
};

export default ResponderService;
