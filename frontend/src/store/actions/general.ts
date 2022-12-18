import { FETCH_FAILED, LOADING } from '../types';

export const setLoading = (loading: boolean) => ({
  type: LOADING,
  loading,
});

export const setFetchFailed = (data: {
  error: unknown;
  errorStatus: boolean;
}) => ({
  type: FETCH_FAILED,
  error: data,
});
