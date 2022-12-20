import { NextFunction, Request, Response } from "express";
import ApiError from "../exceptions/apiError";
import { Status } from "../types";
export default function error(
  error: ApiError,
  _: Request,
  response: Response,
  next: NextFunction
): void {
  const status = error.statusCode || Status.INTERNAL_SERVER_ERROR_CODE;
  const message = error.message || Status.INTERNAL_SERVER_ERROR_MESSAGE;

  response.status(status).json({ message });
  next();
}
