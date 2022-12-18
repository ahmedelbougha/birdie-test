import { Request, Response } from "express";
import eventService from "../services/event";

/**
 * Controller function to get care recipients
 * @param {Request} _
 * @param {Response} response
 */
export async function getRecipients(
  _: Request,
  response: Response
): Promise<void> {
  try {
    // fetching recipients from the database
    const events = await eventService.fetchRecipients(0, 10);
    response.status(200).json({
      data: events.recipients,
    });
  } catch (error) {
    response.status(500).json({
      // this is for testing purpose, the error should be logged instead and
      // return "unknown error"
      error,
    });
  }
}

/**
 * Controller function to get care recipient summary
 * @param {Request} request
 * @param {Response} response
 */
export async function getRecipientSummary(
  request: Request,
  response: Response
): Promise<void> {
  try {
    // fetching recipient's summary from the database
    const recipientSummary = await eventService.fetchRecipientSummary(
      request.params.recipientId
    );
    response.status(200).json({
      data: recipientSummary,
    });
  } catch (error) {
    response.status(500).json({
      // this is for testing purpose, the error should be logged instead and return "unknown error"
      error,
    });
  }
}
export default { getRecipients, getRecipientSummary };
