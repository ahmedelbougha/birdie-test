import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CardsWrapper } from '../components/styles/CardsWrapper.styled';
import { StyledError } from '../components/styles/Error.styled';
import { Button } from '../components/styles/Button.styled';
import { getListRecipients } from '../store/actions/recipients';
import { CareRecipient } from '../store/reducers/recipients.d';
import { RootState } from '../store/index';
import Card from '../components/Card';

/**
 * Home page component
 * @returns JSX.Element
 */
function Home(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    // get the list of recipients
    dispatch(getListRecipients());
  }, [dispatch]);

  const recipients = useSelector((state: RootState): CareRecipient[] => {
    return state.recipients.data;
  });

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
