import { EventTypes } from './constants';

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
