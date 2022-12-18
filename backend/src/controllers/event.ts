import { Request, Response } from "express";
import eventService from "../services/event";

/**
 * Controller function to get all events or can use optional recipientId for filtering
 * @param {Request} request
 * @param {Response} response
 */
async function getEvents(request: Request, response: Response): Promise<void> {
  try {
    // fetching events from the database
    const events = await eventService.fetchEvents(
      0,
      20,
      request.params.recipientId
    );

    response.status(200).json({
      data: events.events,
      count: events.count,
    });
  } catch (error) {
    response.status(500).json({
      // this is for testing purpose, the error should be logged instead and
      // return "unknown error"
      error,
    });
  }
}

export default { getEvents };
