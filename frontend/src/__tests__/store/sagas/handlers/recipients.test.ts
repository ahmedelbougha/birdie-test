import { call, put } from "redux-saga/effects";

import {
  successListRecipients,
  successSummaryRecipient,
} from "../../../../store/actions/recipients";

import { setLoading, setFetchFailed } from "../../../../store/actions/general";

import {
  requestListRecipients,
  requestSummaryRecipient,
} from "../../../../store/sagas/requests/recipients";

import {
  handelListRecipients,
  handelSummaryRecipient,
} from "../../../../store/sagas/handlers/recipients";

jest.mock("redux-saga/effects");
jest.mock("../../../../store/actions/recipients");
jest.mock("../../../../store/sagas/requests/recipients");

let recipientId = "some-recipient-id";

describe("Sagas handlers", () => {
  it("Should test handler for successful list of recipients", () => {
    const data = {
      data: {
        data: [
          {
            care_recipient_id: recipientId,
          },
        ],
      },
    };

    const generatorCall = handelListRecipients();
    generatorCall.next();
    // put setLoading to activate the loader
    expect(put).toBeCalledTimes(1);
    expect(put).toBeCalledWith(setLoading(true));
    generatorCall.next();
    // call the requestListRecipient to run API call
    expect(call).toBeCalledTimes(1);
    expect(call).toBeCalledWith(requestListRecipients);
    // this the second time to call "put" to set the list of recipients
    generatorCall.next(data);
    expect(put).toBeCalledTimes(2);
    expect(put).toHaveBeenNthCalledWith(2, successListRecipients(data as any));
    generatorCall.next(data);
    // this is the third time to call "put" to deactivate the loader
    expect(put).toBeCalledTimes(3);
    expect(put).toHaveBeenNthCalledWith(3, setLoading(false));
  });

  it("should test handler for failed list of recipients", () => {
    jest.fn(requestListRecipients).mockRejectedValue(new Error("test"));

    const generatorCall = handelListRecipients();
    generatorCall.next();
    // put setLoading to activate the loader
    expect(put).toBeCalledTimes(1);
    expect(put).toBeCalledWith(setLoading(true));
    generatorCall.next();
    // call the requestListRecipient to run API call
    expect(call).toBeCalledTimes(1);
    expect(call).toBeCalledWith(requestListRecipients);
    generatorCall.next();
    // this is the second time to call "put" to set the fetch failure
    expect(put).toBeCalledTimes(2);
    expect(put).toHaveBeenNthCalledWith(
      2,
      setFetchFailed({
        error: new TypeError(
          "Cannot read properties of undefined (reading 'data')"
        ),
        errorStatus: true,
      } as any)
    );
    generatorCall.next();
    // this is the third time to call "put" to deactivate the loader
    expect(put).toBeCalledTimes(3);
    expect(put).toHaveBeenNthCalledWith(3, setLoading(false));
  });

  it("should test handler for success summary of recipient's events", () => {
    // mock for the original data returned by the request
    const data = {
      data: {
        data: {
          care_recipient_id: recipientId,
          recipient_summary: [
            {
              event_type: "alert_raised",
              event_type_count: 32,
            },
          ],
        },
      },
    };

    // mock for the flattened the data
    const flattenData = {
      data: {
        data: {
          care_recipient_id: "some-recipient-id",
          recipient_summary: { alert_raised: 32 },
        },
      },
    };

    const generatorCall = handelSummaryRecipient({ recipientId } as any);

    generatorCall.next();
    expect(put).toBeCalledTimes(1);
    expect(put).toBeCalledWith(setLoading(true));
    generatorCall.next();
    expect(call).toBeCalledTimes(1);

    // should find a way to test this
    // it's being called as anonymous function
    // expect(call).toBeCalledWith(() => requestSummaryRecipient(recipientId));
    expect(call).toBeCalledWith(expect.any(Function));
    generatorCall.next(data);
    expect(put).toBeCalledTimes(2);

    // test that the generator function has flatten the data correctly
    expect(data).toMatchObject(flattenData);
    expect(put).toHaveBeenNthCalledWith(
      2,
      successSummaryRecipient(data as any)
    );
    generatorCall.next(data);
    expect(put).toBeCalledTimes(3);
    expect(put).toHaveBeenNthCalledWith(3, setLoading(false));
  });

  it("should test handler for failure summary of recipient's events", () => {
    jest.fn(requestSummaryRecipient).mockRejectedValue(new Error("test"));

    const generatorCall = handelSummaryRecipient({ recipientId } as any);

    generatorCall.next();
    expect(put).toBeCalledTimes(1);
    expect(put).toBeCalledWith(setLoading(true));
    generatorCall.next();
    expect(call).toBeCalledTimes(1);

    // should find a way to test this
    // it's being called as anonymous function
    // expect(call).toBeCalledWith(() => requestSummaryRecipient(recipientId));
    expect(call).toBeCalledWith(expect.any(Function));
    generatorCall.next({});
    expect(put).toBeCalledTimes(2);

    expect(put).toHaveBeenNthCalledWith(
      2,
      setFetchFailed({
        error: new TypeError(
          "Cannot destructure property 'data' of 'response.data' as it is undefined."
        ),
        errorStatus: true,
      } as any)
    );
    generatorCall.next({});
    expect(put).toBeCalledTimes(3);
    expect(put).toHaveBeenNthCalledWith(3, setLoading(false));
  });

  it.skip("should test handler for success list of recipient's detailed events", () => {});
  it.skip("should test handler for failure list of recipient's detailed events", () => {});
});
