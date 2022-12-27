import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CardsWrapper, DashboardCard } from "../components/Card";
import EventTable from "../components/EventTable";
import EventTimeline from "../components/EventTimeline";
import { Container, StyledError } from "../components/styles";
import {
  getEventsRecipient, getSummaryRecipient
} from "../store/actions/recipients";
import { RootState } from "../store/index";
import { Event, Summary } from "../store/reducers/recipients.d";
import { buildEventTableEvents } from "../utils/functions";

/**
 * Dashboard component to display recipient complete information
 * @returns JSX.Element
 */
function Dashboard(): JSX.Element {
  const dispatch = useDispatch();
  // variable to hold the different event types
  let eventTypes: string[][] = buildEventTableEvents();
  let { recipientId } = useParams();

  const { summaryRecipient, eventsRecipient } = useSelector(
    (
      state: RootState
    ): {
      summaryRecipient: Summary;
      eventsRecipient: Event[];
    } => {
      return state.recipients;
    }
  );

  useEffect(() => {
    // run dispatches in case of recipientId is there and
    // no data coming from selectors or data coming from selector
    // contain different recipientId
    if (
      recipientId &&
      (!summaryRecipient || summaryRecipient.care_recipient_id !== recipientId)
    ) {
      // get the summary of recipient events (counts)
      // used in EventTable and using the recipient id in DashboardCard (due to we don't have access to the name of
      // the care recipient)
      dispatch(getSummaryRecipient(recipientId));

      // get detailed events of the recipient
      // used in the EventTimeline
      dispatch(getEventsRecipient(recipientId));
    }
  }, [dispatch, recipientId, summaryRecipient]);

  if (!eventsRecipient) {
    return <></>;
  }

  if (eventsRecipient.length === 0) {
    return (
      <StyledError>
        <h2>There's no matching care recipients records!</h2>
      </StyledError>
    );
  }

  return (
    <>
      <h2>Client Info</h2>
      <Container>
        <CardsWrapper>
          <DashboardCard
            title={`Mr./Mrs. ${summaryRecipient.care_recipient_id.substring(
              0,
              5
            )}`}
            image=""
          />
          <EventTable
            eventTypes={eventTypes}
            summaryTypes={summaryRecipient.recipient_summary}
          />
        </CardsWrapper>
        <EventTimeline events={eventsRecipient} />
      </Container>
    </>
  );
}

export default Dashboard;
