import { call, put } from 'redux-saga/effects';
import {
  successListRecipients,
  successSummaryRecipient,
  successEventsRecipient,
} from '../../actions/recipients';
import { setLoading, setFetchFailed } from '../../actions/general';

import {
  requestListRecipients,
  requestSummaryRecipient,
  requestEventsRecipient,
} from '../requests/recipients';

import { Params } from './recipients.d';

/**
 * Handler function for the list of recipients request
 */
export function* handelListRecipients(): any {
  try {
    // start the loader
    yield put(setLoading(true));
    // request the data
    const response = yield call(requestListRecipients);
    const { data } = response.data;
    // pass the data
    yield put(successListRecipients(data));
  } catch (error) {
    // set the error
    yield put(setFetchFailed({ error, errorStatus: true }));
  }
  // stop the loader
  yield put(setLoading(false));
}

/**
 * Handler function for the summary of recipient request
 */
export function* handelSummaryRecipient({ recipientId }: Params): any {
  try {
    // start the loader
    yield put(setLoading(true));
    // request the data
    const response = yield call(() => requestSummaryRecipient(recipientId));
    // pass the data
    const { data } = response.data;

    // restructuring the data for better consumption
    // converting [{event_type: "a", event_type_count: 1}] to {a: 1}
    // 1. converting [{event_type: "a", event_type_count: 1}] to [{a: 1}, {b: 2}]
    const recipient_summary = data.recipient_summary.map((summary: any) => ({
      [summary['event_type']]: summary['event_type_count'],
    }));

    // 2. flatting the array of resulted objects
    // [{a: 1}, {b: 2}] to {a: 1, b: 2}
    if (recipient_summary.length) {
      data.recipient_summary = Object.assign.apply(Object, recipient_summary);
    }

    yield put(successSummaryRecipient(data));
  } catch (error) {
    // set the error
    yield put(setFetchFailed({ error, errorStatus: true }));
  }
  // stop the loader
  yield put(setLoading(false));
}

/**
 * Handler function for the detailed events of recipient request
 */
export function* handelEventRecipients({ recipientId }: Params): any {
  try {
    // start the loader
    yield put(setLoading(true));
    // request the data
    const response = yield call(() => requestEventsRecipient(recipientId));
    // pass the data
    const { data } = response.data;
    yield put(successEventsRecipient(data));
  } catch (error) {
    // set the error
    yield put(setFetchFailed({ error, errorStatus: true }));
  }
  // stop the loader
  yield put(setLoading(false));
}
