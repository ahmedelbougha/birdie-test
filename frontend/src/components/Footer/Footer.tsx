import { Container } from '../';
import { StyledFooter, StyledFooterLogo } from './';

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterLogo src="/images/birdie-logo.svg" width="110" />
      </Container>
    </StyledFooter>
  );
}
