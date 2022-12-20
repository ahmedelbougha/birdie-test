import { NextFunction, Request, Response } from "express";
import eventService from "../services/event";
import { Status } from "../types";

/**
 * Controller function to get all events or can use optional recipientId for filtering
 * @param {Request} request
 * @param {Response} response
 */
async function getEvents(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    // fetching events from the database
    const events = await eventService.fetchEvents(
      0,
      20,
      request.params.recipientId
    );

    response.status(Status.OK_CODE).json({
      data: events.events,
      count: events.count,
    });
  } catch (error: any) {
    next(error);
  }
}

export default { getEvents };
