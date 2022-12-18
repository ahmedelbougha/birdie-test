import axios from 'axios';
import {
  requestEventsRecipient,
  requestListRecipients,
  requestSummaryRecipient,
} from '../../../../store/sagas/requests/recipients';

jest.mock('axios');
let recipientId = 'some-recipient-id';
describe('Actions', () => {
  it('Request for list of recipients', async () => {
    await requestListRecipients();

    expect(axios.request).toBeCalledTimes(1);
    expect(axios.request).toBeCalledWith({
      method: 'GET',
      url: `${process.env.REACT_APP_BACKEND_URL}/recipients`,
    });
  });
  it("Request for summary of recipient's data", async () => {
    await requestSummaryRecipient(recipientId);

    expect(axios.request).toBeCalledTimes(1);
    expect(axios.request).toBeCalledWith({
      method: 'GET',
      url: `${process.env.REACT_APP_BACKEND_URL}/recipients/${recipientId}`,
    });
  });
  it('Request for list of recipients events with details', async () => {
    await requestEventsRecipient(recipientId);

    expect(axios.request).toBeCalledTimes(1);
    expect(axios.request).toBeCalledWith({
      method: 'GET',
      url: `${process.env.REACT_APP_BACKEND_URL}/events/${recipientId}`,
    });
  });
});
