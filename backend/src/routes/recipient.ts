import { NextFunction, Request, Response, Router } from "express";
import careRecipientController from "../controllers/careRecipient";

const router = Router();

router.get(
  "/",
  (request: Request, response: Response, next: NextFunction): void => {
    // A limitation in express, action functions must return void
    // if it returns Promise<void>, the router cannot accept it
    void careRecipientController.getRecipients(request, response, next);
  }
);

router.get(
  "/:recipientId?",
  (request: Request, response: Response, next: NextFunction): void => {
    // A limitation in express, action functions must return void
    // if it returns Promise<void>, the router cannot accept it
    void careRecipientController.getRecipientSummary(request, response, next);
  }
);

export default router;
