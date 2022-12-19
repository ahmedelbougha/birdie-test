import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getSummaryRecipient,
  getEventsRecipient,
} from '../store/actions/recipients';
import { Container } from '../components/styles/Container.styled';
import { StyledError } from '../components/styles/Error.styled';
import { CardsWrapper } from '../components/styles/CardsWrapper.styled';
import { Summary, Event } from '../store/reducers/recipients.d';
import { RootState } from '../store/index';
import DashboardCard from '../components/DashboardCard';
import EventTimeline from '../components/EventTimeline';
import EventTable from '../components/EventTable';
import { buildEventTableEvents } from '../utils/functions';

/**
 * Dashboard component to display recipient complete information
 * @returns JSX.Element
 */
function Dashboard(): JSX.Element {
  const dispatch = useDispatch();
  // variable to hold the different event types
  let eventTypes: string[][] = buildEventTableEvents();
  let { recipientId } = useParams();

  useEffect(() => {
    if (recipientId) {
      // get the summary of recipient events (counts)
      // used in EventTable and using the recipient id in DashboardCard (due to we don't have access to the name of
      // the care recipient)
      dispatch(getSummaryRecipient(recipientId));

      // get detailed events of the recipient
      // used in the EventTimeline
      dispatch(getEventsRecipient(recipientId));
    }
  }, [recipientId, dispatch]);

  const { summaryRecipient, eventsRecipient, loading } = useSelector(
    (
      state: RootState
    ): {
      summaryRecipient: Summary;
      eventsRecipient: Event[];
      loading: number;
    } => {
      return { ...state.recipients, ...state.general };
    }
  );

  if (loading) {
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
