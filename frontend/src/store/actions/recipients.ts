import {
  GET_LIST_RECIPIENTS,
  SUCCESS_LIST_RECIPIENTS,
  GET_SUMMARY_RECIPIENT,
  SUCCESS_SUMMARY_RECIPIENT,
  GET_EVENTS_RECIPIENT,
  SUCCESS_EVENTS_RECIPIENT,
} from '../types';

export const getListRecipients = () => ({
  type: GET_LIST_RECIPIENTS,
});

export const successListRecipients = (
  data: [{ care_recipient_id: string }]
) => ({
  type: SUCCESS_LIST_RECIPIENTS,
  data: data,
});

export const getSummaryRecipient = (recipientId: string) => ({
  type: GET_SUMMARY_RECIPIENT,
  recipientId: recipientId,
});

export const successSummaryRecipient = (
  data: [{ care_recipient_id: string; recipient_summary: {} }]
) => ({
  type: SUCCESS_SUMMARY_RECIPIENT,
  data: data,
});

export const getEventsRecipient = (recipientId: string) => ({
  type: GET_EVENTS_RECIPIENT,
  recipientId: recipientId,
});

export const successEventsRecipient = (
  data: [
    {
      id: string;
      care_recipient_id: string;
      event_type: string;
      timestamp: string;
      payload: {};
    }
  ]
) => ({
  type: SUCCESS_EVENTS_RECIPIENT,
  data: data,
});
