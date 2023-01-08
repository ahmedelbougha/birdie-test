import { Star as StarIcon } from "@material-ui/icons";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EventTimelineProps } from ".";
import EventTimelineElement from "./EventTimelineElement";

export function EventTimeline({ events }: EventTimelineProps) {
  return (
    <VerticalTimeline>
      {events.map((event) => (
        <EventTimelineElement event={event} key={event.id} />
      ))}

      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<StarIcon />}
        key="start"
      />
    </VerticalTimeline>
  );
}
