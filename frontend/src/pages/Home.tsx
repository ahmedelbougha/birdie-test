import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, CardsWrapper, StyledError } from "../components";
import { RootState } from '../store';
import { getListRecipients } from '../store/actions';
import { CareRecipient } from '../types';

/**
 * Home page component
 * @returns JSX.Element
 */
function Home(): JSX.Element {
  const dispatch = useDispatch();

  const recipients  = useSelector((state: RootState): CareRecipient[] => {
    return state.recipients.list;
  });

  useEffect(() => {
    // get the list of recipients
    if (!recipients) {
      dispatch(getListRecipients());
    }
  }, [dispatch, recipients]);


  if (!recipients) {
    return <></>;
  }

  // in case of successful call but no care recipient
  if (recipients.length === 0) {
    return (
      <StyledError>
        <h2>There's no care recipients records in the time being!</h2>
      </StyledError>
    );
  }

  return (
    <>
      <h2>Welcome to Birdie customer portal.</h2>
      <CardsWrapper>
        {recipients.map((recipient: CareRecipient, index) => (
          <Card
            title={`Mr./Mrs. ${recipient.recipientId.substring(0, 5)}`}
            image=""
            key={index}
          >
            <p>Birdie Client</p>
            <Link to={`/dashboard/${recipient.recipientId}`}>
              <Button> Details </Button>
            </Link>
          </Card>
        ))}
      </CardsWrapper>
    </>
  );
}

export default Home;
