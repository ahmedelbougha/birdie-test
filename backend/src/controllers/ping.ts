import * as express from "express";

export const pingController = express.Router();

pingController.get("/", (_, res) => {
  res.status(200).json({
    greetings: "Thank you for spending some time on this test. All the best 🙌",
    routes:
      "/events, /events/[care-recipient-id], /recipients, and /recipients/[care-recipient-id]",
  });
});
