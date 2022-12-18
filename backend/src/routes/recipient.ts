import * as express from "express";
import careRecipientController from "../controllers/careRecipient";

const router = express.Router();

router.get(
  "/",
  (request: express.Request, response: express.Response): void => {
    // A limitation in express, action functions must return void
    // if it returns Promise<void>, the router cannot accept it
    void careRecipientController.getRecipients(request, response);
  }
);

router.get(
  "/:recipientId?",
  (request: express.Request, response: express.Response): void => {
    // A limitation in express, action functions must return void
    // if it returns Promise<void>, the router cannot accept it
    void careRecipientController.getRecipientSummary(request, response);
  }
);

export default router;
