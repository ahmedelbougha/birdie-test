import { takeLatest } from 'redux-saga/effects';
import {
  GET_LIST_RECIPIENTS,
  GET_SUMMARY_RECIPIENT,
  GET_EVENTS_RECIPIENT,
} from '../types';
import {
  handelListRecipients,
  handelSummaryRecipient,
  handelEventRecipients,
} from './handlers/recipients';

/**
 * Saga watcher function for the different application requests
 */
export function* watcherSaga() {
  yield takeLatest(GET_LIST_RECIPIENTS, handelListRecipients);
  yield takeLatest(GET_SUMMARY_RECIPIENT, handelSummaryRecipient);
  yield takeLatest(GET_EVENTS_RECIPIENT, handelEventRecipients);
}
