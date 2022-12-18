import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import StarIcon from '@material-ui/icons/Star';
import EventTimelineElement from './EventTimelineElement';
import { EventTimelineProps } from './EventTimeline.d';

export default function EventTimeline({ events }: EventTimelineProps) {
  return (
    <VerticalTimeline>
      {events.map((event, index) => (
        <EventTimelineElement event={event} key={index} />
      ))}

      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<StarIcon />}
        key="start"
      />
    </VerticalTimeline>
  );
}
