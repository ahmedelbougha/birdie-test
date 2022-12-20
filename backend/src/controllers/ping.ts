import * as express from "express";
import { Status } from "../types";

export const pingController = express.Router();

pingController.get("/", (_, res) => {
  res.status(Status.OK_CODE).json({
    greetings: "Thank you for spending some time on this test. All the best 🙌",
    routes:
      "/events, /events/[care-recipient-id], /recipients, and /recipients/[care-recipient-id]",
  });
});
