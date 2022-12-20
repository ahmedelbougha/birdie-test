import { Request, Response } from "express";
import { Status } from "../types";

/**
 * Controller function to get 404 not found
 * @param {Request} _
 * @param {Response} response
 */
export function notFound(_: Request, response: Response): void {
  response
    .status(Status.NOT_FOUND_CODE)
    .send({ message: Status.NOT_FOUND_MESSAGE });
}

export default { notFound };
