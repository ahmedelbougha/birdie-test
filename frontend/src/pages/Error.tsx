import { StyledError } from '../components/styles/Error.styled';
import { Error } from '../store/reducers/general.d';

export default function ErrorPage({
  error = {},
  errorStatus,
}: Error): JSX.Element {
  let statusText = '';
  if (errorStatus) {
    // statusText = error.statusText;
  }
  return (
    <StyledError>
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{statusText}</i>
        </p>
      </div>
    </StyledError>
  );
}
