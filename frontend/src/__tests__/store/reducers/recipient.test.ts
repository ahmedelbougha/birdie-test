import {
  SUCCESS_EVENTS_RECIPIENT,
  SUCCESS_LIST_RECIPIENTS,
  SUCCESS_SUMMARY_RECIPIENT
} from "../../../store/types";

import { recipientsReducer } from "../../../store/reducers";

describe("Reducers", () => {
  it("SUCCESS_LIST_RECIPIENTS reducer returns correct state", () => {
    let returnedData = recipientsReducer(
      { data: { initialKey: "initialValue" } } as any,
      { type: SUCCESS_LIST_RECIPIENTS, data: [{ care_recipient_id: "some-recipient-id" }] as any }
    );
    expect(returnedData).toMatchObject({ list: [{ recipientId: "some-recipient-id" }] });
  });
  it("SUCCESS_SUMMARY_RECIPIENT returns empty state", () => {
    let returnedData = recipientsReducer({} as any, {
      type: SUCCESS_SUMMARY_RECIPIENT,
      data: {} as any,
    });
    expect(returnedData).toMatchObject({ summaryRecipient: {} });
  });
  it("SUCCESS_SUMMARY_RECIPIENT handling the data correctly", () => {
    // mock of response data
    const data = {
      care_recipient_id: "some-recipient-id",
      recipient_summary: {
        a: 1,
        b: 3,
        c: 5,
      },
    };

    // data after restructuring
    const finalData = {
      recipientId: data.care_recipient_id,
      recipientSummary: { a: 1, b: 3, c: 5 },
    };

    let returnedData = recipientsReducer(undefined, {
      type: SUCCESS_SUMMARY_RECIPIENT,
      data: data as any,
    });
    expect(returnedData).toMatchObject({ summaryRecipient: finalData });
  });

  it("SUCCESS_EVENTS_RECIPIENT returns correct state", () => {
    let returnedData = recipientsReducer(
      { eventsRecipient: { initialKey: "initialValue" } } as any,
      { type: SUCCESS_EVENTS_RECIPIENT, data: {} as any }
    );
    expect(returnedData).toMatchObject({ eventsRecipient: {} });
  });
});
