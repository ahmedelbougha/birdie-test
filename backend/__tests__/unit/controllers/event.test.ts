import { Request, Response } from "express";
import eventController from "../../../src/controllers/event";
import eventService from "../../../src/services/event";
import Event from "../../../src/models/event";
import mocks from "../../mocks/objects";

let mockedFetchEvents: any, request: any, response: any, responseObject: any;

const fetchEventsReturn = {
  events: [
    {
      id: "00114a9f-00dc-4f39-a6ac-af1b7e0543e7",
      care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
      event_type: "fluid_intake_observation",
      payload: {
        id: "00114a9f-00dc-4f39-a6ac-af1b7e0543e7",
        fluid: "caffeinated",
        observed: false,
        visit_id: "5cc23bf0-8b66-f8a8-4339-688e1d43e11a",
        timestamp: "2019-04-26T07:08:21.758Z",
        event_type: "fluid_intake_observation",
        caregiver_id: "220d9432-b5ed-4c81-8709-434899d2cd1b",
        care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
        consumed_volume_ml: 230,
      },
    } as Event,
  ],
  count: 1,
};

beforeEach(() => {
  request = mocks.request;
  response = mocks.response;
  responseObject = mocks.responseObject;

  mockedFetchEvents = jest
    .spyOn(eventService, "fetchEvents")
    .mockResolvedValue(fetchEventsReturn);
});

afterEach(() => {
  mockedFetchEvents.mockReset();
});

describe("Event Controller - Get Events", () => {
  it("Should call get events with recipient id", async () => {
    await eventController.getEvents(request as Request, response as Response);
    expect(eventService.fetchEvents).toBeCalledTimes(1);
    expect(eventService.fetchEvents).toBeCalledWith(0, 20, mocks.recipientId);
    expect(responseObject.statusCode).toEqual(200);
    expect(responseObject.body).toEqual({
      data: fetchEventsReturn.events,
      count: fetchEventsReturn.count,
    });
  });
  it("Should call get events with recipient id undefined", async () => {
    request.params = {};
    await eventController.getEvents(request as Request, response as Response);
    expect(eventService.fetchEvents).toBeCalledTimes(1);
    expect(eventService.fetchEvents).toBeCalledWith(0, 20, undefined);
    expect(responseObject.statusCode).toEqual(200);
    expect(responseObject.body).toEqual({
      data: fetchEventsReturn.events,
      count: fetchEventsReturn.count,
    });
  });

  it("Should force 500 error", async () => {
    request = {};
    await eventController.getEvents(request as Request, response as Response);
    expect(eventService.fetchEvents).not.toBeCalled();
    expect(responseObject.statusCode).toEqual(500);
  });
});
