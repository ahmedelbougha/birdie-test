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
      return {
        ...state,
        loading: action.loading ? state.loading + 1 : state.loading - 1,
      };
    default:
      return state;
  }
};

export default generalReducer;
