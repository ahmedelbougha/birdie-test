import {
  GET_LIST_RECIPIENTS,
  SUCCESS_LIST_RECIPIENTS,
  GET_SUMMARY_RECIPIENT,
  SUCCESS_SUMMARY_RECIPIENT,
  GET_EVENTS_RECIPIENT,
  SUCCESS_EVENTS_RECIPIENT,
} from '../../../store/types';
import {
  getEventsRecipient,
  getListRecipients,
  getSummaryRecipient,
  successEventsRecipient,
  successListRecipients,
  successSummaryRecipient,
} from '../../../store/actions/recipients';

let recipientId = 'some-recipient-id';

describe('Actions', () => {
  it('getEventsRecipient', () => {
    expect(getEventsRecipient(recipientId)).toMatchObject({
      type: GET_EVENTS_RECIPIENT,
    });
  });
  it('getListRecipients', () => {
    expect(getListRecipients()).toMatchObject({
      type: GET_LIST_RECIPIENTS,
    });
  });
  it('getSummaryRecipient', () => {
    expect(getSummaryRecipient(recipientId)).toMatchObject({
      type: GET_SUMMARY_RECIPIENT,
    });
  });

  it('successEventsRecipient', () => {
    const eventsObject = [
      {
        id: 'some-id',
        care_recipient_id: 'some-recipient-id',
        event_type: 'some-event',
        timestamp: 'time-stamp',
        payload: {},
      },
    ] as any;
    expect(successEventsRecipient(eventsObject)).toMatchObject({
      type: SUCCESS_EVENTS_RECIPIENT,
      data: eventsObject,
    });
  });
  it('successListRecipients', () => {
    expect(
      successListRecipients([{ care_recipient_id: recipientId }])
    ).toMatchObject({
      type: SUCCESS_LIST_RECIPIENTS,
      data: [{ care_recipient_id: recipientId }],
    });
  });
  it('successSummaryRecipient', () => {
    const summaryObject = [
      {
        care_recipient_id: recipientId,
        recipient_summary: { 'some-event': '1' },
      },
    ] as any;
    expect(successSummaryRecipient(summaryObject)).toMatchObject({
      type: SUCCESS_SUMMARY_RECIPIENT,
      data: summaryObject,
    });
  });
});
