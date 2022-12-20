import { NextFunction, Request, Response, Router } from "express";
import eventController from "../controllers/event";

const router = Router();

router.get(
  "/:recipientId?",
  (request: Request, response: Response, next: NextFunction): void => {
    // A limitation in express, action functions must return void
    // if it returns Promise<void>, the router cannot accept it
    void eventController.getEvents(request, response, next);
  }
);

export default router;
