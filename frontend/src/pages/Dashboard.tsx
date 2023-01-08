import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  CardsWrapper,
  Container,
  DashboardCard,
  EventTable,
  EventTimeline,
  StyledError
} from "../components";
import { getEventsRecipient, getSummaryRecipient } from "../store/actions";
import { RootState } from "../store/index";
import { Event } from "../types";
import { buildEventTableEvents } from "../utils/functions";

/**
 * Dashboard component to display recipient complete information
 * @returns JSX.Element
 */
function Dashboard(): JSX.Element | null {
  const dispatch = useDispatch();
  // variable to hold the different event types
  let eventTypes: string[][] = buildEventTableEvents();
  let { recipientId } = useParams();

  const { summaryRecipient, eventsRecipient } = useSelector(
    (
      state: RootState
    ): {
      summaryRecipient: {
        recipientId: string;
        recipientSummary: { [key: string]: string };
      };
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
      (!summaryRecipient || summaryRecipient.recipientId !== recipientId)
    ) {
      // get the summary of recipient events (counts)
      // used in EventTable and using the recipient id in DashboardCard
      // (due to we don't have access to the name of the care recipient)
      dispatch(getSummaryRecipient(recipientId));

      // get detailed events of the recipient
      // used in the EventTimeline
      dispatch(getEventsRecipient(recipientId));
    }
  }, [dispatch, recipientId, summaryRecipient]);

  if (eventsRecipient === null) {
    return null;
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
            title={`Mr./Mrs. ${summaryRecipient.recipientId.substring(0, 5)}`}
            image=""
          />
          <EventTable
            eventTypes={eventTypes}
            summaryTypes={summaryRecipient.recipientSummary}
          />
        </CardsWrapper>
        <EventTimeline events={eventsRecipient} />
      </Container>
    </>
  );
}

export default Dashboard;
