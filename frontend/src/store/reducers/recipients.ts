import {
  SUCCESS_LIST_RECIPIENTS,
  SUCCESS_SUMMARY_RECIPIENT,
  SUCCESS_EVENTS_RECIPIENT,
} from '../types';
import { CareRecipient } from './recipients.d';

const initialState = {
  data: [],
  summaryRecipient: {},
  eventsRecipient: [],
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
const recipientsReducer = (
  state = initialState,
  action: { type: string; data: CareRecipient[] }
): any => {
  switch (action.type) {
    case SUCCESS_LIST_RECIPIENTS:
      return { ...state, data: action.data };
    case SUCCESS_SUMMARY_RECIPIENT:
      return { ...state, summaryRecipient: action.data };
    case SUCCESS_EVENTS_RECIPIENT:
      return { ...state, eventsRecipient: action.data };
    default:
      return state;
  }
};

export default recipientsReducer;
