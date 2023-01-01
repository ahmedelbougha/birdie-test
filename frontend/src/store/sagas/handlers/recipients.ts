import { call, put } from "redux-saga/effects";
import {
  setFetchFailed,
  setLoading,
  successEventsRecipient,
  successListRecipients,
  successSummaryRecipient
} from "../../actions";
import { apiRequest } from "../requests";
import { Params } from "./recipients.d";

/**
 * Handler function for the list of recipients request
 */
export function* handelListRecipients(): any {
  try {
    // start the loader
    yield put(setLoading(true));
    // request the data
    const response = yield call(() => apiRequest("recipients"));
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
    const response = yield call(() => apiRequest(`recipients/${recipientId}`));
    // pass the data
    const { data } = response.data;
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
    const response = yield call(() => apiRequest(`events/${recipientId}`));
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
