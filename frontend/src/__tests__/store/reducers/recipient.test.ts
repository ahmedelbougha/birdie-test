import {
  SUCCESS_LIST_RECIPIENTS,
  SUCCESS_SUMMARY_RECIPIENT,
  SUCCESS_EVENTS_RECIPIENT,
} from '../../../store/types';

import recipientsReducer from '../../../store/reducers/recipients';

describe('Reducers', () => {
  it('SUCCESS_LIST_RECIPIENTS reducer', () => {
    let returnedData = recipientsReducer(
      {},
      { type: SUCCESS_LIST_RECIPIENTS, data: {} as any }
    );
    expect(returnedData).toMatchObject({ data: {} });
  });
  it('SUCCESS_SUMMARY_RECIPIENT reducer', () => {
    let returnedData = recipientsReducer(
      {},
      { type: SUCCESS_SUMMARY_RECIPIENT, data: {} as any }
    );
    expect(returnedData).toMatchObject({ summaryRecipient: {} });
  });
  it('SUCCESS_EVENTS_RECIPIENT reducer', () => {
    let returnedData = recipientsReducer(
      {},
      { type: SUCCESS_EVENTS_RECIPIENT, data: {} as any }
    );
    expect(returnedData).toMatchObject({ eventsRecipient: {} });
  });
});
