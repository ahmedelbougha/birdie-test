import { Event } from '../../store/reducers/recipients.d';

export interface EventTimelineProps {
  events: Event[];
}

export interface EventTimelineElementProps {
  event: Event;
}
