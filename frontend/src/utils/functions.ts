import axios, { AxiosResponse } from "axios";
import { EventTypes } from './constants';


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


export function buildEventTableEvents() {
  let eventTypes = [];

  // get the main keys of event types in order to use them to display events counts
  // in the EventTable
  const eventTypeKeys = Object.keys(EventTypes);

  for (let i = 0; i < eventTypeKeys.length; i += 2) {
    // build eventTypes array with 2 elements at a time
    // to build the EventTable as 2 events with their count per row
    eventTypes.push([eventTypeKeys[i], eventTypeKeys[i + 1]]);
  }

  return eventTypes;
}
