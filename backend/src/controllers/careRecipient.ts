import { NextFunction, Request, Response } from "express";
import eventService from "../services/event";
import { Status } from "../types";

/**
 * Controller function to get care recipients
 * @param {Request} _
 * @param {Response} response
 */
export async function getRecipients(
  _: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    // fetching recipients from the database
    const events = await eventService.fetchRecipients(0, 10);
    response.status(Status.OK_CODE).json({
      data: events.recipients,
    });
  } catch (error: any) {
    next(error);
  }
}

/**
 * Controller function to get care recipient summary
 * @param {Request} request
 * @param {Response} response
 */
export async function getRecipientSummary(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    // fetching recipient's summary from the database
    const recipientSummary = await eventService.fetchRecipientSummary(
      request.params.recipientId
    );
    response.status(Status.OK_CODE).json({
      data: recipientSummary,
    });
  } catch (error: any) {
    next(error);
  }
}
export default { getRecipients, getRecipientSummary };
