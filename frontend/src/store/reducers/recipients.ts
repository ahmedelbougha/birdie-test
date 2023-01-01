import { AnyAction } from "redux";
import {
  SUCCESS_EVENTS_RECIPIENT,
  SUCCESS_LIST_RECIPIENTS,
  SUCCESS_SUMMARY_RECIPIENT
} from "../types";

const initialState = {
  list: null,
  summaryRecipient: null,
  eventsRecipient: null,
};
/**
 * Recipient reducer to get
 * list of recipients
 * summary of recipient events
 * details of recipient events
 * @param state
 * @param action
 * @returns
 */
const recipientsReducer = (state = initialState, action: AnyAction): any => {
  switch (action.type) {
    case SUCCESS_LIST_RECIPIENTS:
      return {
        ...state,
        // Renaming care_recipient_id to recipientId in order to keep
        // the app's variable naming consistent
        list: action.data.map((recipient: { care_recipient_id: string }) => {
          return { recipientId: recipient.care_recipient_id };
        }),
      };
    case SUCCESS_EVENTS_RECIPIENT:
      return { ...state, eventsRecipient: action.data };
    case SUCCESS_SUMMARY_RECIPIENT:
      return {
        ...state,
        summaryRecipient: {
          // Renaming care_recipient_id to recipientId
          // and
          // recipient_summary to recipientSummary
          // in order to keep
          // the app's variable naming consistent
          recipientId: action.data.care_recipient_id,
          recipientSummary: action.data.recipient_summary,
        },
      };
    default:
      return state;
  }
};

export default recipientsReducer;
