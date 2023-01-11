import * as cors from "cors";
import "dotenv/config";
import * as express from "express";
import helmet from "helmet";
import errorController from "./controllers/error";
import { pingController } from "./controllers/ping";
import errorMiddleware from "./middleware/error";
import eventRoutes from "./routes/event";
import recipientRoutes from "./routes/recipient";

const app = express();
app.use(
  cors({
    // Allow requests only from frontend app host
    origin: process.env.ALLOWED_FRONTEND_HOST,
  })
);
// Helmet to secure Express by setting headers
app.use(helmet());

app.use(pingController);
app.use("/events", eventRoutes);
app.use("/recipients", recipientRoutes);
// to catch 404 not found errors
app.use(errorController.notFound);
// to catch any exceptions/errors
app.use(errorMiddleware);

export default app;
