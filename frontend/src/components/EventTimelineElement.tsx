import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import CheckCircle from '@material-ui/icons/CheckCircle';

import { EventTypes } from '../utils/constants';
import { EventTimelineElementProps } from './EventTimelineElement.d';

export default function EventTimelineElement({
  event,
}: EventTimelineElementProps) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: EventTypes[event.event_type]['background'],
        color: EventTypes[event.event_type]['color'],
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${EventTypes[event.event_type]['background']}`,
      }}
      iconStyle={{
        background: EventTypes[event.event_type]['background'],
        color: EventTypes[event.event_type]['color'],
      }}
      icon={<CheckCircle />}
    >
      <h3 className="vertical-timeline-element-title">
        {event.event_type.replaceAll('_', ' ').toUpperCase()}
      </h3>
      <h4 className="vertical-timeline-element-subtitle">
        {new Date(event.timestamp).toDateString()}
      </h4>
      <div>
        {EventTypes[event.event_type]['extraData'].map(
          // please check the EventTypes constant for extraData array of keys
          // keys vary based on the event type
          (dataKey: string, index): JSX.Element => (
            <p key={dataKey + index}>
              {(event.payload[dataKey] as string) || ''}
            </p>
          )
        )}
      </div>
    </VerticalTimelineElement>
  );
}
