import * as express from "express";
import eventController from "../controllers/event";

const router = express.Router();

router.get(
  "/:recipientId?",
  (request: express.Request, response: express.Response): void => {
    // A limitation in express, action functions must return void
    // if it returns Promise<void>, the router cannot accept it
    void eventController.getEvents(request, response);
  }
);

export default router;
