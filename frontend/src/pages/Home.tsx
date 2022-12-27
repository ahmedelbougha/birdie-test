import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card, { CardsWrapper } from '../components/Card';
import { Button, StyledError } from '../components/styles';
import { RootState } from '../store';
import { getListRecipients } from '../store/actions/recipients';
import { CareRecipient } from '../store/reducers/recipients.d';

/**
 * Home page component
 * @returns JSX.Element
 */
function Home(): JSX.Element {
  const dispatch = useDispatch();

  const recipients  = useSelector((state: RootState): CareRecipient[] => {
    return state.recipients.data;
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
            title={`Mr./Mrs. ${recipient.care_recipient_id.substring(0, 5)}`}
            image=""
            key={index}
          >
            <p>Birdie Client</p>
            <Link to={`/dashboard/${recipient.care_recipient_id}`}>
              <Button> Details </Button>
            </Link>
          </Card>
        ))}
      </CardsWrapper>
    </>
  );
}

export default Home;
