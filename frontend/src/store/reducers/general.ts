import { FETCH_FAILED, LOADING } from '../types';
import { Error } from './general.d';
const initialState = {
  loading: 0,
  error: {
    errorStatus: false,
  },
};
/**
 * Others reducer for
 * loading
 * errors
 * @param state
 * @param action
 * @returns
 */
const generalReducer = (
  state = initialState,
  action: { type: string; error?: Error; loading?: boolean }
): any => {
  switch (action.type) {
    case FETCH_FAILED:
      return { ...state, error: action.error };
    case LOADING:
      // Loader is a number
      // 0 = not loading, while, 1 or more = loading
      // this is used in order to work with pages that launch 2 actions
      // It allows the loading spinner to stay running until the last
      // request is done
      return {
        ...state,
        loading: action.loading ? state.loading + 1 : state.loading - 1,
      };
    default:
      return state;
  }
};

export default generalReducer;
