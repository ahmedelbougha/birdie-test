import axios, { AxiosResponse } from 'axios';

/**
 * Request list of recipients
 * @returns Promise<AxiosResponse<any, any>>
 */
export function requestListRecipients(): Promise<AxiosResponse<any, any>> {
  return axios.request({
    method: 'GET',
    url: `${process.env.REACT_APP_BACKEND_URL}/recipients`,
  });
}

/**
 * Request summary of a recipient
 * @returns Promise<AxiosResponse<any, any>>
 */
export function requestSummaryRecipient(
  recipientId: string
): Promise<AxiosResponse<any, any>> {
  return axios.request({
    method: 'GET',
    url: `${process.env.REACT_APP_BACKEND_URL}/recipients/${recipientId}`,
  });
}

/**
 * Request the details of a recipient
 * @returns Promise<AxiosResponse<any, any>>
 */
export function requestEventsRecipient(
  recipientId: string
): Promise<AxiosResponse<any, any>> {
  return axios.request({
    method: 'GET',
    url: `${process.env.REACT_APP_BACKEND_URL}/events/${recipientId}`,
  });
}
