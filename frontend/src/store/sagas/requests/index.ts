import axios, { AxiosResponse } from "axios";

/**
 * General API Requester
 * @returns Promise<AxiosResponse<any, any>>
 */
export function apiRequest(path: string): Promise<AxiosResponse<any, any>> {
  if (path.length === 0) {
    throw new Error("Request path cannot be empty!");
  }
  return axios.request({
    method: "GET",
    url: `${process.env.REACT_APP_BACKEND_URL}/${path}`,
  });
}
