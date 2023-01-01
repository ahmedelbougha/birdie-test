import { Event } from '../../types';

export interface EventTimelineProps {
  events: Event[];
  onMore?: Function
}

export interface EventTimelineElementProps {
  event: Event;
}
