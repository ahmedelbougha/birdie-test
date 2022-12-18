import { Request, Response } from "express";

/**
 * Controller function to get 404 not found
 * @param {Request} _
 * @param {Response} response
 */
export function notFound(_: Request, response: Response): void {
  response.status(404).send({ error: "Not found" });
}

export default { notFound };
