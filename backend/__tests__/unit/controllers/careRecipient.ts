import { Request, Response } from "express";
import careRecipientController from "../../../src/controllers/careRecipient";
import eventService from "../../../src/services/event";
import Event from "../../../src/models/event";
import mocks from "../../mocks/objects";

let mockedFetchRecipients: any,
  mockedFetchRecipientSummary: any,
  request: any,
  response: any,
  responseObject: any;

const fetchRecipientsReturn = {
  recipients: [
    {
      care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
    },
    {
      care_recipient_id: "e3e2bff8-d318-4760-beea-841a75f00227",
    },
    {
      care_recipient_id: "ad3512a6-91b1-4d7d-a005-6f8764dd0111",
    },
  ] as Event[],
};

const fetchRecipientSummaryReturn = {
  care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
  recipient_summary: [
    {
      event_type: "alert_raised",
      event_type_count: 32,
    },
    {
      event_type: "check_in",
      event_type_count: 161,
    },
    {
      event_type: "check_out",
      event_type_count: 161,
    },
  ],
};

beforeEach(() => {
  request = mocks.request;
  response = mocks.response;
  responseObject = mocks.responseObject;

  mockedFetchRecipients = jest
    .spyOn(eventService, "fetchRecipients")
    .mockResolvedValue(fetchRecipientsReturn);

  mockedFetchRecipientSummary = jest
    .spyOn(eventService, "fetchRecipientSummary")
    .mockResolvedValue(fetchRecipientSummaryReturn);
});

afterEach(() => {
  mockedFetchRecipients.mockReset();
  mockedFetchRecipientSummary.mockReset();
});

describe("Care Recipient Controller - Get Recipients", () => {
  it("Should get all recipients", async () => {
    await careRecipientController.getRecipients(
      request as Request,
      response as Response
    );
    expect(eventService.fetchRecipients).toBeCalledTimes(1);
    expect(eventService.fetchRecipients).toBeCalledWith(0, 10);
    expect(responseObject.statusCode).toEqual(200);
    expect(responseObject.body).toMatchObject({
      data: fetchRecipientsReturn.recipients,
    });
  });

  it("Should get recipient summary", async () => {
    request.params = {
      recipientId: mocks.recipientId,
    };
    await careRecipientController.getRecipientSummary(
      request as Request,
      response as Response
    );
    expect(eventService.fetchRecipientSummary).toBeCalledTimes(1);
    expect(eventService.fetchRecipientSummary).toBeCalledWith(
      mocks.recipientId
    );
    expect(responseObject.statusCode).toEqual(200);
    expect(responseObject.body).toMatchObject({
      data: fetchRecipientSummaryReturn,
    });
  });
});
